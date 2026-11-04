// Small page helpers: live date and time, a greeting, and feedback for every action in the demo.
(function () {
	var DAY_NAMES = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
	var MONTH_NAMES = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

	function setText(id, text) {
		var element = document.getElementById(id);
		if (element) element.textContent = text;
	}

	function updateTime() {
		var now = new Date();
		var hours = now.getHours();
		var minutes = now.getMinutes();
		var displayHour = hours % 12 || 12;
		setText('topnav_Date', DAY_NAMES[now.getDay()] + ' ' + now.getDate() + ' ' + MONTH_NAMES[now.getMonth()] + ' ' + now.getFullYear());
		setText('topnav_Time', displayHour + ':' + (minutes < 10 ? '0' : '') + minutes + (hours < 12 ? ' ص' : ' م'));
		setText('studentGreeting', (hours < 12 ? 'صباح الخير' : 'مساء الخير') + '، أحمد');
	}

	updateTime();
	setInterval(updateTime, 30000);

	// The demo has no backend, so actions say what the real portal did instead of doing nothing.
	var toast = document.createElement('div');
	var toastTimer;
	toast.className = 'portal-toast';
	toast.setAttribute('role', 'status');
	document.body.appendChild(toast);

	function showToast(message) {
		toast.textContent = message;
		toast.classList.add('is-visible');
		clearTimeout(toastTimer);
		toastTimer = setTimeout(function () {
			toast.classList.remove('is-visible');
		}, 3200);
	}

	document.addEventListener('click', function (event) {
		var link = event.target.closest('a[href="#"], .ca__btn, .notification');
		if (!link) return;
		event.preventDefault();
		var label = link.getAttribute('title') || link.textContent.trim();
		showToast(link.classList.contains('system') ?
			'في البوابة الفعلية كان «' + label + '» يفتح مباشرة دون تسجيل دخول جديد.' :
			'هذه نسخة توضيحية، وهذا الإجراء كان يعمل في البوابة الفعلية.');
	});

	var opinionButton = document.querySelector('.opinion .btn');
	var opinionField = document.getElementById('exampleFormControlTextarea1');
	var opinionStatus = document.querySelector('.opinion-status');
	if (opinionButton && opinionField && opinionStatus) {
		opinionButton.addEventListener('click', function () {
			if (!opinionField.value.trim()) {
				opinionStatus.textContent = 'اكتب رأيك أو استفسارك أولًا.';
				opinionField.focus();
				return;
			}
			opinionField.value = '';
			opinionStatus.textContent = 'شكرًا لك، وصلتنا رسالتك.';
		});
	}
})();
