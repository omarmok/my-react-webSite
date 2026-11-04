// Student schedule: "what do I have today, what's next, and where?"
// Today's agenda is the default view; the week view gives the full picture on larger screens.
(function ($) {
	var DAYS = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'];

	// Sample data for the demo. c = the course key in COURSES.
	var COURSES = {
		c1: { name: 'تحليل وتصميم النظم', code: 'CS 342', teacher: 'د. سعد العتيبي', room: 'مبنى 3 - قاعة 12', absences: '1', grade: '18 من 20' },
		c2: { name: 'قواعد البيانات', code: 'CS 351', teacher: 'د. نورة القحطاني', room: 'مبنى 3 - قاعة 7', absences: '0', grade: '17 من 20' },
		c3: { name: 'هندسة البرمجيات', code: 'CS 363', teacher: 'د. فهد الدوسري', room: 'مبنى 2 - قاعة 4', absences: '2', grade: '15 من 20' },
		c4: { name: 'شبكات الحاسب', code: 'CS 372', teacher: 'د. خالد الشمري', room: 'معمل الشبكات', absences: '0', grade: '19 من 20' }
	};

	var LESSONS = [
		[['09:30', '10:30', 'c1'], ['11:00', '12:30', 'c2'], ['14:00', '15:15', 'c3']],
		[['10:00', '11:00', 'c2'], ['11:30', '13:00', 'c4'], ['13:30', '15:00', 'c1'], ['15:45', '16:45', 'c3']],
		[['09:00', '10:15', 'c4'], ['10:45', '11:45', 'c3'], ['12:00', '13:45', 'c2'], ['13:45', '15:00', 'c3']],
		[['09:30', '10:30', 'c1'], ['12:00', '13:45', 'c4'], ['15:30', '16:30', 'c1'], ['17:00', '18:30', 'c2']],
		[['10:00', '11:00', 'c2'], ['12:30', '14:00', 'c1'], ['15:45', '16:45', 'c3']]
	];

	var WEEK_START = 9 * 60;
	var WEEK_END = 19 * 60;
	var HOUR_HEIGHT = 58;

	var root = document.getElementById('studentSchedule');
	if (!root) return;

	var now = new Date();
	var todayIndex = now.getDay() <= 4 ? now.getDay() : -1; // Friday and Saturday have no classes
	var nowMinutes = now.getHours() * 60 + now.getMinutes();
	var selectedDay = todayIndex === -1 ? 0 : todayIndex;
	var view = 'day';

	function toMinutes(time) {
		var parts = time.split(':');
		return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
	}

	function escapeHtml(text) {
		return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;');
	}

	function lessonStatus(dayIndex, lesson) {
		if (dayIndex !== todayIndex) return '';
		if (nowMinutes >= toMinutes(lesson[0]) && nowMinutes < toMinutes(lesson[1])) return 'now';
		var upcoming = LESSONS[dayIndex].filter(function (item) {
			return toMinutes(item[0]) > nowMinutes;
		})[0];
		if (upcoming === lesson) return 'next';
		return toMinutes(lesson[1]) <= nowMinutes ? 'past' : '';
	}

	function daySummary(dayIndex) {
		var lessons = LESSONS[dayIndex];
		var count = lessons.length + ' محاضرات';
		if (todayIndex === -1 && dayIndex === 0) {
			return 'لا توجد محاضرات اليوم. هذا جدول الأحد: ' + count + '، تبدأ ' + lessons[0][0] + '.';
		}
		if (dayIndex !== todayIndex) {
			return 'يوم ' + DAYS[dayIndex] + ': ' + count + '، من ' + lessons[0][0] + ' إلى ' + lessons[lessons.length - 1][1] + '.';
		}
		var current = lessons.filter(function (item) { return lessonStatus(dayIndex, item) === 'now'; })[0];
		var next = lessons.filter(function (item) { return lessonStatus(dayIndex, item) === 'next'; })[0];
		if (current) {
			return 'الآن: <strong>' + escapeHtml(COURSES[current[2]].name) + '</strong> في ' + escapeHtml(COURSES[current[2]].room) + '.';
		}
		if (next) {
			var wait = toMinutes(next[0]) - nowMinutes;
			var when = wait < 60 ? 'بعد ' + wait + ' دقيقة' : 'الساعة ' + next[0];
			return 'محاضرتك التالية: <strong>' + escapeHtml(COURSES[next[2]].name) + '</strong> ' + when + ' في ' + escapeHtml(COURSES[next[2]].room) + '.';
		}
		return 'انتهت محاضرات اليوم. نراك في المحاضرة القادمة.';
	}

	function dayProgress(dayIndex) {
		if (dayIndex !== todayIndex) return '';
		var lessons = LESSONS[dayIndex];
		var done = lessons.filter(function (item) { return toMinutes(item[1]) <= nowMinutes; }).length;
		return '<div class="ss-progress"><div class="ss-progress__bar"><span style="width:' + Math.round(done / lessons.length * 100) + '%"></span></div>' +
			'<span class="ss-progress__label">' + done + ' من ' + lessons.length + ' محاضرات</span></div>';
	}

	function renderTabs() {
		return DAYS.map(function (name, index) {
			var selected = index === selectedDay;
			return '<button type="button" role="tab" id="ss-tab-' + index + '" aria-selected="' + selected + '"' +
				' aria-controls="ss-panel" tabindex="' + (selected ? '0' : '-1') + '" data-day="' + index + '">' +
				name + (index === todayIndex ? '<span class="ss-today">اليوم</span>' : '') + '</button>';
		}).join('');
	}

	function renderAgenda() {
		var dayLessons = LESSONS[selectedDay];
		var items = dayLessons.map(function (lesson, index) {
			var course = COURSES[lesson[2]];
			var status = lessonStatus(selectedDay, lesson);
			var chip = status === 'now' ? '<span class="ss-chip ss-chip--now">جارية الآن</span>' :
				status === 'next' ? '<span class="ss-chip">التالية</span>' :
				status === 'past' ? '<span class="ss-chip ss-chip--past">انتهت</span>' : '';
			return '<li><button type="button" class="ss-lesson ss-' + lesson[2] + (status ? ' is-' + status : '') + '"' +
				' data-day="' + selectedDay + '" data-index="' + index + '">' +
				'<span class="ss-time"><strong>' + lesson[0] + '</strong><span>' + lesson[1] + '</span></span>' +
				'<span class="ss-body"><span class="ss-name">' + escapeHtml(course.name) + '</span>' +
				'<span class="ss-meta">' + escapeHtml(course.room) + ' · ' + escapeHtml(course.teacher) + '</span></span>' +
				chip + '<span class="ss-chevron" aria-hidden="true">‹</span></button></li>';
		}).join('');
		return '<ul class="ss-agenda">' + items + '</ul>';
	}

	function renderWeek() {
		var hours = '';
		for (var minutes = WEEK_START; minutes < WEEK_END; minutes += 60) {
			hours += '<span class="ss-hour" style="height:' + HOUR_HEIGHT + 'px">' + (minutes / 60 < 10 ? '0' : '') + (minutes / 60) + ':00</span>';
		}
		var height = ((WEEK_END - WEEK_START) / 60) * HOUR_HEIGHT;
		var columns = DAYS.map(function (name, dayIndex) {
			var blocks = LESSONS[dayIndex].map(function (lesson, index) {
				var course = COURSES[lesson[2]];
				var top = ((toMinutes(lesson[0]) - WEEK_START) / 60) * HOUR_HEIGHT;
				var size = ((toMinutes(lesson[1]) - toMinutes(lesson[0])) / 60) * HOUR_HEIGHT;
				return '<button type="button" class="ss-block ss-' + lesson[2] + '" style="top:' + top + 'px;height:' + (size - 4) + 'px"' +
					' data-day="' + dayIndex + '" data-index="' + index + '">' +
					'<span class="ss-name">' + escapeHtml(course.name) + '</span>' +
					'<span class="ss-meta">' + lesson[0] + ' - ' + lesson[1] + '</span></button>';
			}).join('');
			return '<div class="ss-column' + (dayIndex === todayIndex ? ' is-today' : '') + '">' +
				'<h4>' + name + '</h4><div class="ss-track" style="height:' + height + 'px">' + blocks + '</div></div>';
		}).join('');
		return '<div class="ss-week"><div class="ss-hours" aria-hidden="true">' + hours + '</div><div class="ss-columns">' + columns + '</div></div>';
	}

	function render(focusDay) {
		var isDay = view === 'day';
		root.innerHTML =
			'<div class="ss-toolbar">' +
				(isDay ? '<div class="ss-days" role="tablist" aria-label="أيام الأسبوع">' + renderTabs() + '</div>' : '<p class="ss-week-title">الأسبوع كاملًا</p>') +
				'<div class="ss-views" role="group" aria-label="طريقة عرض الجدول">' +
					'<button type="button" data-view="day" aria-pressed="' + isDay + '">اليوم</button>' +
					'<button type="button" data-view="week" aria-pressed="' + !isDay + '">الأسبوع</button>' +
				'</div>' +
			'</div>' +
			(isDay ? '<div class="ss-status"><p class="ss-summary" aria-live="polite">' + daySummary(selectedDay) + '</p>' + dayProgress(selectedDay) + '</div>' +
				'<div id="ss-panel" role="tabpanel" aria-labelledby="ss-tab-' + selectedDay + '">' + renderAgenda() + '</div>' : renderWeek());
		if (focusDay !== undefined) document.getElementById('ss-tab-' + focusDay).focus();
	}

	function showCourseDetails(dayIndex, index) {
		var lesson = LESSONS[dayIndex][index];
		var course = COURSES[lesson[2]];
		var modal = $('#courseModal');
		modal.find('.course-name').text(course.name);
		modal.find('.course-time').text(DAYS[dayIndex] + ' · ' + lesson[0] + ' - ' + lesson[1]);
		modal.find('.course-code').text(course.code);
		modal.find('.course-teacher').text(course.teacher);
		modal.find('.course-room').text(course.room);
		modal.find('.course-absences').text(course.absences);
		modal.find('.course-grade').text(course.grade);
		modal.modal('show');
	}

	root.addEventListener('click', function (event) {
		var viewButton = event.target.closest('[data-view]');
		if (viewButton) {
			view = viewButton.getAttribute('data-view');
			render();
			return;
		}
		var tab = event.target.closest('[role="tab"]');
		if (tab) {
			selectedDay = parseInt(tab.getAttribute('data-day'), 10);
			// event.detail is 0 for keyboard activation: keep focus on the tab only then
			render(event.detail === 0 ? selectedDay : undefined);
			return;
		}
		var lesson = event.target.closest('.ss-lesson, .ss-block');
		if (lesson) {
			showCourseDetails(parseInt(lesson.getAttribute('data-day'), 10), parseInt(lesson.getAttribute('data-index'), 10));
		}
	});

	// Arrow keys move between day tabs; in RTL, the left arrow is the next day.
	root.addEventListener('keydown', function (event) {
		if (!event.target.closest('[role="tab"]')) return;
		var moves = { ArrowLeft: 1, ArrowRight: -1 };
		var target = null;
		if (moves[event.key]) target = (selectedDay + moves[event.key] + DAYS.length) % DAYS.length;
		if (event.key === 'Home') target = 0;
		if (event.key === 'End') target = DAYS.length - 1;
		if (target === null) return;
		event.preventDefault();
		selectedDay = target;
		render(target);
	});

	// The week grid needs a wide screen, so small screens always use the day agenda.
	var narrow = window.matchMedia('(max-width: 767px)');
	function applyWidth() {
		if (narrow.matches && view === 'week') {
			view = 'day';
			render();
		}
	}
	if (narrow.addEventListener) narrow.addEventListener('change', applyWidth);

	render();
})(jQuery);
