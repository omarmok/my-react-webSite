function getCurrentDateFormatted() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
window.hijriRender = function () {

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let dt = `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`;

    let currentDT = getCurrentDateFormatted();

    //default date
    $(".hijri-date-input").hijriDatePicker({

        // timezone
        // timeZone: 'local',

        // Date format. See moment.js docs for valid formats.
        format: 'YYYY-MM-DD',
        hijriFormat: 'iYYYY-iMM-iDD',
        hijriDayViewHeaderFormat: 'iMMMM iYYYY',

        // Changes the heading of the datepicker when in "days" view.
        dayViewHeaderFormat: 'MMMM YYYY',

        // Allows for several input formats to be valid.
        extraFormats: false,

        // Number of minutes the up/down arrow's will move the minutes value in the time picker
        stepping: 1,

        // Prevents date/time selections before this date
        minDate: '1901-01-01',

        // Prevents date/time selections after this date
        maxDate: '2070-01-01',

        // On show, will set the picker to the current date/time
        useCurrent: false,

        // Using a Bootstraps collapse to switch between date/time pickers.
        collapse: true,

        // See moment.js for valid locales.
        locale: 'ar-SA',

        // Sets the picker default date/time.
        defaultDate: false,

        // Disables selection of dates in the array, e.g. holidays
        disabledDates: false,

        // Disables selection of dates NOT in the array, e.g. holidays
        enabledDates: false,

        // Change the default icons for the pickers functions.
        icons: {
            time: 'fa fa-clock text-primary',
            date: 'glyphicon glyphicon-calendar',
            up: 'fa fa-chevron-up text-primary',
            down: 'fa fa-chevron-down text-primary',
            previous: '<<',
            next: '>>',
            today: 'اليوم',
            clear: 'مسح',
            close: 'اغلاق'
        },

        // custom tooltip text
        tooltips: {
            today: 'Go to today',
            clear: 'Clear selection',
            close: 'Close the picker',
            selectMonth: 'Select Month',
            prevMonth: 'Previous Month',
            nextMonth: 'Next Month',
            selectYear: 'Select Year',
            prevYear: 'Previous Year',
            nextYear: 'Next Year',
            selectDecade: 'Select Decade',
            prevDecade: 'Previous Decade',
            nextDecade: 'Next Decade',
            prevCentury: 'Previous Century',
            nextCentury: 'Next Century',
            pickHour: 'Pick Hour',
            incrementHour: 'Increment Hour',
            decrementHour: 'Decrement Hour',
            pickMinute: 'Pick Minute',
            incrementMinute: 'Increment Minute',
            decrementMinute: 'Decrement Minute',
            pickSecond: 'Pick Second',
            incrementSecond: 'Increment Second',
            decrementSecond: 'Decrement Second',
            togglePeriod: 'Toggle Period',
            selectTime: 'Select Time'
        },

        // Defines if moment should use scrict date parsing when considering a date to be valid
        useStrict: false,

        // Shows the picker side by side when using the time and date together
        sideBySide: true,

        // Disables the section of days of the week, e.g. weekends.
        daysOfWeekDisabled: [],

        // Shows the week of the year to the left of first day of the week
        calendarWeeks: false,

        // The default view to display when the picker is shown
        // Accepts: 'years','months','days'
        viewMode: 'days',

        // Changes the placement of the icon toolbar
        toolbarPlacement: 'default',

        // Show the "Today" button in the icon toolbar
        showTodayButton: true,

        // Show the "Clear" button in the icon toolbar
        showClear: true,

        // Show the "Close" button in the icon toolbar
        showClose: true,

        // On picker show, places the widget at the identifier (string) or jQuery object if the element has css position: 'relative'
        widgetPositioning: {
            horizontal: 'auto',
            vertical: 'auto'
        },

        // On picker show, places the widget at the identifier (string) or jQuery object **if** the element has css `position: 'relative'`
        widgetParent: null,

        // Allow date picker show event to fire even when the associated input element has the `readonly="readonly"`property.
        ignoreReadonly: false,

        // Will cause the date picker to stay open after selecting a date if no time components are being used
        keepOpen: false,

        // If `false`, the textbox will not be given focus when the picker is shown.
        focusOnShow: true,

        // Will display the picker inline without the need of a input field. This will also hide borders and shadows.
        inline: false,

        // Will cause the date picker to **not** revert or overwrite invalid dates.
        keepInvalid: false,

        // CSS selector
        datepickerInput: '.datepickerinput',

        // shows switcher
        showSwitcher: true,

        // Debug mode
        debug: false,

        // If `true`, the picker will show on textbox focus and icon click when used in a button group.
        allowInputToggle: true,

        // Must be in 24 hour format. Will allow or disallow hour selections (much like `disabledTimeIntervals`) but will affect all days.
        disabledTimeIntervals: false,

        // Disable/enable hours
        disabledHours: false,
        enabledHours: false,

        // This will change the `viewDate` without changing or setting the selected date.
        viewDate: false,

        // Use hijri date
        hijri: true,

        // Enable/disable RTL mode
        isRTL: true

    });



    //future date only
    $(".hijri-date-input-future").hijriDatePicker({

        // timezone
        // timeZone: 'local',

        // Date format. See moment.js docs for valid formats.
        format: 'YYYY-MM-DD',
        hijriFormat: 'iYYYY-iMM-iDD',
        hijriDayViewHeaderFormat: 'iMMMM iYYYY',

        // Changes the heading of the datepicker when in "days" view.
        dayViewHeaderFormat: 'MMMM YYYY',

        // Allows for several input formats to be valid.
        extraFormats: false,

        // Number of minutes the up/down arrow's will move the minutes value in the time picker
        stepping: 1,

        // Prevents date/time selections before this date
        minDate: currentDT,

        // Prevents date/time selections after this date
        maxDate: '2070-01-01',

        // On show, will set the picker to the current date/time
        useCurrent: false,

        // Using a Bootstraps collapse to switch between date/time pickers.
        collapse: true,

        // See moment.js for valid locales.
        locale: 'ar-SA',

        // Sets the picker default date/time.
        defaultDate: false,

        // Disables selection of dates in the array, e.g. holidays
        disabledDates: false,

        // Disables selection of dates NOT in the array, e.g. holidays
        enabledDates: false,

        // Change the default icons for the pickers functions.
        icons: {
            time: 'fa fa-clock text-primary',
            date: 'glyphicon glyphicon-calendar',
            up: 'fa fa-chevron-up text-primary',
            down: 'fa fa-chevron-down text-primary',
            previous: '<<',
            next: '>>',
            today: 'اليوم',
            clear: 'مسح',
            close: 'اغلاق'
        },

        // custom tooltip text
        tooltips: {
            today: 'Go to today',
            clear: 'Clear selection',
            close: 'Close the picker',
            selectMonth: 'Select Month',
            prevMonth: 'Previous Month',
            nextMonth: 'Next Month',
            selectYear: 'Select Year',
            prevYear: 'Previous Year',
            nextYear: 'Next Year',
            selectDecade: 'Select Decade',
            prevDecade: 'Previous Decade',
            nextDecade: 'Next Decade',
            prevCentury: 'Previous Century',
            nextCentury: 'Next Century',
            pickHour: 'Pick Hour',
            incrementHour: 'Increment Hour',
            decrementHour: 'Decrement Hour',
            pickMinute: 'Pick Minute',
            incrementMinute: 'Increment Minute',
            decrementMinute: 'Decrement Minute',
            pickSecond: 'Pick Second',
            incrementSecond: 'Increment Second',
            decrementSecond: 'Decrement Second',
            togglePeriod: 'Toggle Period',
            selectTime: 'Select Time'
        },

        // Defines if moment should use scrict date parsing when considering a date to be valid
        useStrict: false,

        // Shows the picker side by side when using the time and date together
        sideBySide: true,

        // Disables the section of days of the week, e.g. weekends.
        daysOfWeekDisabled: [],

        // Shows the week of the year to the left of first day of the week
        calendarWeeks: false,

        // The default view to display when the picker is shown
        // Accepts: 'years','months','days'
        viewMode: 'days',

        // Changes the placement of the icon toolbar
        toolbarPlacement: 'default',

        // Show the "Today" button in the icon toolbar
        showTodayButton: true,

        // Show the "Clear" button in the icon toolbar
        showClear: true,

        // Show the "Close" button in the icon toolbar
        showClose: true,

        // On picker show, places the widget at the identifier (string) or jQuery object if the element has css position: 'relative'
        widgetPositioning: {
            horizontal: 'auto',
            vertical: 'auto'
        },

        // On picker show, places the widget at the identifier (string) or jQuery object **if** the element has css `position: 'relative'`
        widgetParent: null,

        // Allow date picker show event to fire even when the associated input element has the `readonly="readonly"`property.
        ignoreReadonly: false,

        // Will cause the date picker to stay open after selecting a date if no time components are being used
        keepOpen: false,

        // If `false`, the textbox will not be given focus when the picker is shown.
        focusOnShow: true,

        // Will display the picker inline without the need of a input field. This will also hide borders and shadows.
        inline: false,

        // Will cause the date picker to **not** revert or overwrite invalid dates.
        keepInvalid: false,

        // CSS selector
        datepickerInput: '.datepickerinput',

        // shows switcher
        showSwitcher: true,

        // Debug mode
        debug: false,

        // If `true`, the picker will show on textbox focus and icon click when used in a button group.
        allowInputToggle: true,

        // Must be in 24 hour format. Will allow or disallow hour selections (much like `disabledTimeIntervals`) but will affect all days.
        disabledTimeIntervals: false,

        // Disable/enable hours
        disabledHours: false,
        enabledHours: false,

        // This will change the `viewDate` without changing or setting the selected date.
        viewDate: false,

        // Use hijri date
        hijri: true,

        // Enable/disable RTL mode
        isRTL: true

    });



    //future date only
    $(".hijri-date-input-past").hijriDatePicker({

        // timezone
        // timeZone: 'local',

        // Date format. See moment.js docs for valid formats.
        format: 'YYYY-MM-DD',
        hijriFormat: 'iYYYY-iMM-iDD',
        hijriDayViewHeaderFormat: 'iMMMM iYYYY',

        // Changes the heading of the datepicker when in "days" view.
        dayViewHeaderFormat: 'MMMM YYYY',

        // Allows for several input formats to be valid.
        extraFormats: false,

        // Number of minutes the up/down arrow's will move the minutes value in the time picker
        stepping: 1,

        // Prevents date/time selections before this date
        minDate: '1901-01-01',

        // Prevents date/time selections after this date
        maxDate: dt,

        // On show, will set the picker to the current date/time
        useCurrent: false,

        // Using a Bootstraps collapse to switch between date/time pickers.
        collapse: true,

        // See moment.js for valid locales.
        locale: 'ar-SA',

        // Sets the picker default date/time.
        defaultDate: false,

        // Disables selection of dates in the array, e.g. holidays
        disabledDates: false,

        // Disables selection of dates NOT in the array, e.g. holidays
        enabledDates: false,

        // Change the default icons for the pickers functions.
        icons: {
            time: 'fa fa-clock text-primary',
            date: 'glyphicon glyphicon-calendar',
            up: 'fa fa-chevron-up text-primary',
            down: 'fa fa-chevron-down text-primary',
            previous: '<<',
            next: '>>',
            today: 'اليوم',
            clear: 'مسح',
            close: 'اغلاق'
        },

        // custom tooltip text
        tooltips: {
            today: 'Go to today',
            clear: 'Clear selection',
            close: 'Close the picker',
            selectMonth: 'Select Month',
            prevMonth: 'Previous Month',
            nextMonth: 'Next Month',
            selectYear: 'Select Year',
            prevYear: 'Previous Year',
            nextYear: 'Next Year',
            selectDecade: 'Select Decade',
            prevDecade: 'Previous Decade',
            nextDecade: 'Next Decade',
            prevCentury: 'Previous Century',
            nextCentury: 'Next Century',
            pickHour: 'Pick Hour',
            incrementHour: 'Increment Hour',
            decrementHour: 'Decrement Hour',
            pickMinute: 'Pick Minute',
            incrementMinute: 'Increment Minute',
            decrementMinute: 'Decrement Minute',
            pickSecond: 'Pick Second',
            incrementSecond: 'Increment Second',
            decrementSecond: 'Decrement Second',
            togglePeriod: 'Toggle Period',
            selectTime: 'Select Time'
        },

        // Defines if moment should use scrict date parsing when considering a date to be valid
        useStrict: false,

        // Shows the picker side by side when using the time and date together
        sideBySide: true,

        // Disables the section of days of the week, e.g. weekends.
        daysOfWeekDisabled: [],

        // Shows the week of the year to the left of first day of the week
        calendarWeeks: false,

        // The default view to display when the picker is shown
        // Accepts: 'years','months','days'
        viewMode: 'days',

        // Changes the placement of the icon toolbar
        toolbarPlacement: 'default',

        // Show the "Today" button in the icon toolbar
        showTodayButton: true,

        // Show the "Clear" button in the icon toolbar
        showClear: true,

        // Show the "Close" button in the icon toolbar
        showClose: true,

        // On picker show, places the widget at the identifier (string) or jQuery object if the element has css position: 'relative'
        widgetPositioning: {
            horizontal: 'auto',
            vertical: 'auto'
        },

        // On picker show, places the widget at the identifier (string) or jQuery object **if** the element has css `position: 'relative'`
        widgetParent: null,

        // Allow date picker show event to fire even when the associated input element has the `readonly="readonly"`property.
        ignoreReadonly: false,

        // Will cause the date picker to stay open after selecting a date if no time components are being used
        keepOpen: false,

        // If `false`, the textbox will not be given focus when the picker is shown.
        focusOnShow: true,

        // Will display the picker inline without the need of a input field. This will also hide borders and shadows.
        inline: false,

        // Will cause the date picker to **not** revert or overwrite invalid dates.
        keepInvalid: false,

        // CSS selector
        datepickerInput: '.datepickerinput',

        // shows switcher
        showSwitcher: true,

        // Debug mode
        debug: false,

        // If `true`, the picker will show on textbox focus and icon click when used in a button group.
        allowInputToggle: true,

        // Must be in 24 hour format. Will allow or disallow hour selections (much like `disabledTimeIntervals`) but will affect all days.
        disabledTimeIntervals: false,

        // Disable/enable hours
        disabledHours: false,
        enabledHours: false,

        // This will change the `viewDate` without changing or setting the selected date.
        viewDate: false,

        // Use hijri date
        hijri: true,

        // Enable/disable RTL mode
        isRTL: true

    });



    //default date with Time
    $(".hijri-date-input-time").hijriDatePicker({

        // timezone
        // timeZone: 'local',

        // Date format. See moment.js docs for valid formats.
        format: 'YYYY-MM-DD hh:mm', // includes time
        hijriFormat: 'iYYYY-iMM-iDD hh:mm tt', // includes time
        hijriDayViewHeaderFormat: 'iMMMM iYYYY',

        // Changes the heading of the datepicker when in "days" view.
        dayViewHeaderFormat: 'MMMM YYYY',

        // Allows for several input formats to be valid.
        extraFormats: false,

        // Number of minutes the up/down arrow's will move the minutes value in the time picker
        stepping: 1,

        // Prevents date/time selections before this date
        minDate: '1901-01-01',

        // Prevents date/time selections after this date
        maxDate: '2070-01-01',

        // On show, will set the picker to the current date/time
        useCurrent: false,

        // Using a Bootstraps collapse to switch between date/time pickers.
        collapse: true,

        // See moment.js for valid locales.
        locale: 'ar-SA',

        // Sets the picker default date/time.
        defaultDate: false,

        // Disables selection of dates in the array, e.g. holidays
        disabledDates: false,

        // Disables selection of dates NOT in the array, e.g. holidays
        enabledDates: false,

        // Change the default icons for the pickers functions.
        icons: {
            time: 'fa fa-clock text-primary',
            date: 'glyphicon glyphicon-calendar',
            up: 'fa fa-chevron-up text-primary',
            down: 'fa fa-chevron-down text-primary',
            previous: '<<',
            next: '>>',
            today: 'اليوم',
            clear: 'مسح',
            close: 'اغلاق'
        },

        // custom tooltip text
        tooltips: {
            today: 'Go to today',
            clear: 'Clear selection',
            close: 'Close the picker',
            selectMonth: 'Select Month',
            prevMonth: 'Previous Month',
            nextMonth: 'Next Month',
            selectYear: 'Select Year',
            prevYear: 'Previous Year',
            nextYear: 'Next Year',
            selectDecade: 'Select Decade',
            prevDecade: 'Previous Decade',
            nextDecade: 'Next Decade',
            prevCentury: 'Previous Century',
            nextCentury: 'Next Century',
            pickHour: 'Pick Hour',
            incrementHour: 'Increment Hour',
            decrementHour: 'Decrement Hour',
            pickMinute: 'Pick Minute',
            incrementMinute: 'Increment Minute',
            decrementMinute: 'Decrement Minute',
            pickSecond: 'Pick Second',
            incrementSecond: 'Increment Second',
            decrementSecond: 'Decrement Second',
            togglePeriod: 'Toggle Period',
            selectTime: 'Select Time'
        },

        // Defines if moment should use scrict date parsing when considering a date to be valid
        useStrict: false,

        // Shows the picker side by side when using the time and date together
        sideBySide: true,

        // Disables the section of days of the week, e.g. weekends.
        daysOfWeekDisabled: [],

        // Shows the week of the year to the left of first day of the week
        calendarWeeks: false,

        // The default view to display when the picker is shown
        // Accepts: 'years','months','days'
        viewMode: 'days',

        // Changes the placement of the icon toolbar
        toolbarPlacement: 'default',

        // Show the "Today" button in the icon toolbar
        showTodayButton: true,

        // Show the "Clear" button in the icon toolbar
        showClear: true,

        // Show the "Close" button in the icon toolbar
        showClose: true,

        // On picker show, places the widget at the identifier (string) or jQuery object if the element has css position: 'relative'
        widgetPositioning: {
            horizontal: 'auto',
            vertical: 'auto'
        },

        // On picker show, places the widget at the identifier (string) or jQuery object **if** the element has css `position: 'relative'`
        widgetParent: null,

        // Allow date picker show event to fire even when the associated input element has the `readonly="readonly"`property.
        ignoreReadonly: false,

        // Will cause the date picker to stay open after selecting a date if no time components are being used
        keepOpen: false,

        // If `false`, the textbox will not be given focus when the picker is shown.
        focusOnShow: true,

        // Will display the picker inline without the need of a input field. This will also hide borders and shadows.
        inline: false,

        // Will cause the date picker to **not** revert or overwrite invalid dates.
        keepInvalid: false,

        // CSS selector
        datepickerInput: '.datepickerinput',

        // shows switcher
        showSwitcher: true,

        // Debug mode
        debug: false,

        // If `true`, the picker will show on textbox focus and icon click when used in a button group.
        allowInputToggle: true,

        // Must be in 24 hour format. Will allow or disallow hour selections (much like `disabledTimeIntervals`) but will affect all days.
        disabledTimeIntervals: false,

        // Disable/enable hours
        disabledHours: false,
        enabledHours: false,

        // This will change the `viewDate` without changing or setting the selected date.
        viewDate: false,

        // Use hijri date
        hijri: true,

        // Enable/disable RTL mode
        isRTL: true

    });



    //future date with Time
    $(".hijri-date-input-future-time").hijriDatePicker({

        // timezone
        // timeZone: 'local',

        // Date format. See moment.js docs for valid formats.
        format: 'YYYY-MM-DD hh:mm A', // includes time
        hijriFormat: 'iYYYY-iMM-iDD hh:mm A', // includes time
        hijriDayViewHeaderFormat: 'iMMMM iYYYY',

        // Changes the heading of the datepicker when in "days" view.
        dayViewHeaderFormat: 'MMMM YYYY',

        // Allows for several input formats to be valid.
        extraFormats: false,

        // Number of minutes the up/down arrow's will move the minutes value in the time picker
        stepping: 1,

        // Prevents date/time selections before this date
        minDate: dt,

        // Prevents date/time selections after this date
        maxDate: '2070-01-01',

        // On show, will set the picker to the current date/time
        useCurrent: false,

        // Using a Bootstraps collapse to switch between date/time pickers.
        collapse: true,

        // See moment.js for valid locales.
        locale: 'ar-SA',

        // Sets the picker default date/time.
        defaultDate: false,

        // Disables selection of dates in the array, e.g. holidays
        disabledDates: false,

        // Disables selection of dates NOT in the array, e.g. holidays
        enabledDates: false,

        // Change the default icons for the pickers functions.
        icons: {
            time: 'fa fa-clock text-primary',
            date: 'glyphicon glyphicon-calendar',
            up: 'fa fa-chevron-up text-primary',
            down: 'fa fa-chevron-down text-primary',
            previous: '<<',
            next: '>>',
            today: 'اليوم',
            clear: 'مسح',
            close: 'اغلاق'
        },

        // custom tooltip text
        tooltips: {
            today: 'Go to today',
            clear: 'Clear selection',
            close: 'Close the picker',
            selectMonth: 'Select Month',
            prevMonth: 'Previous Month',
            nextMonth: 'Next Month',
            selectYear: 'Select Year',
            prevYear: 'Previous Year',
            nextYear: 'Next Year',
            selectDecade: 'Select Decade',
            prevDecade: 'Previous Decade',
            nextDecade: 'Next Decade',
            prevCentury: 'Previous Century',
            nextCentury: 'Next Century',
            pickHour: 'Pick Hour',
            incrementHour: 'Increment Hour',
            decrementHour: 'Decrement Hour',
            pickMinute: 'Pick Minute',
            incrementMinute: 'Increment Minute',
            decrementMinute: 'Decrement Minute',
            pickSecond: 'Pick Second',
            incrementSecond: 'Increment Second',
            decrementSecond: 'Decrement Second',
            togglePeriod: 'Toggle Period',
            selectTime: 'Select Time'
        },

        // Defines if moment should use scrict date parsing when considering a date to be valid
        useStrict: false,

        // Shows the picker side by side when using the time and date together
        sideBySide: true,

        // Disables the section of days of the week, e.g. weekends.
        daysOfWeekDisabled: [],

        // Shows the week of the year to the left of first day of the week
        calendarWeeks: false,

        // The default view to display when the picker is shown
        // Accepts: 'years','months','days'
        viewMode: 'days',

        // Changes the placement of the icon toolbar
        toolbarPlacement: 'default',

        // Show the "Today" button in the icon toolbar
        showTodayButton: true,

        // Show the "Clear" button in the icon toolbar
        showClear: true,

        // Show the "Close" button in the icon toolbar
        showClose: true,

        // On picker show, places the widget at the identifier (string) or jQuery object if the element has css position: 'relative'
        widgetPositioning: {
            horizontal: 'auto',
            vertical: 'auto'
        },

        // On picker show, places the widget at the identifier (string) or jQuery object **if** the element has css `position: 'relative'`
        widgetParent: null,

        // Allow date picker show event to fire even when the associated input element has the `readonly="readonly"`property.
        ignoreReadonly: false,

        // Will cause the date picker to stay open after selecting a date if no time components are being used
        keepOpen: false,

        // If `false`, the textbox will not be given focus when the picker is shown.
        focusOnShow: true,

        // Will display the picker inline without the need of a input field. This will also hide borders and shadows.
        inline: false,

        // Will cause the date picker to **not** revert or overwrite invalid dates.
        keepInvalid: false,

        // CSS selector
        datepickerInput: '.datepickerinput',

        // shows switcher
        showSwitcher: true,

        // Debug mode
        debug: false,

        // If `true`, the picker will show on textbox focus and icon click when used in a button group.
        allowInputToggle: true,

        // Must be in 24 hour format. Will allow or disallow hour selections (much like `disabledTimeIntervals`) but will affect all days.
        disabledTimeIntervals: false,

        // Disable/enable hours
        disabledHours: false,
        enabledHours: false,

        // This will change the `viewDate` without changing or setting the selected date.
        viewDate: false,

        // Use hijri date
        hijri: true,

        // Enable/disable RTL mode
        isRTL: true

    });




    //Just Current Date
    $(".hijri-date-input-current").hijriDatePicker({
        ormat: 'YYYY-MM-DD',
        hijriFormat: 'iYYYY-iMM-iDD',
        hijriDayViewHeaderFormat: 'iMMMM iYYYY',
        dayViewHeaderFormat: 'MMMM YYYY',
        extraFormats: false,
        stepping: 1,
        minDate: '1901-01-01',
        maxDate: '2070-01-01',
        useCurrent: false,
        locale: 'ar-SA',
        defaultDate: false,  // Set to current date
        enabledDates: [currentDT],  // Only allow the current date
        icons: {
            time: 'fa fa-clock text-primary',
            date: 'glyphicon glyphicon-calendar',
            up: 'fa fa-chevron-up text-primary',
            down: 'fa fa-chevron-down text-primary',
            previous: '<<',
            next: '>>',
            today: 'اليوم',
            clear: 'مسح',
            close: 'اغلاق'
        },
        tooltips: {
            today: 'Go to today',
            clear: 'Clear selection',
            close: 'Close the picker',
            selectMonth: 'Select Month',
            prevMonth: 'Previous Month',
            nextMonth: 'Next Month',
            selectYear: 'Select Year',
            prevYear: 'Previous Year',
            nextYear: 'Next Year',
            selectDecade: 'Select Decade',
            prevDecade: 'Previous Decade',
            nextDecade: 'Next Decade',
            prevCentury: 'Previous Century',
            nextCentury: 'Next Century',
            pickHour: 'Pick Hour',
            incrementHour: 'Increment Hour',
            decrementHour: 'Decrement Hour',
            pickMinute: 'Pick Minute',
            incrementMinute: 'Increment Minute',
            decrementMinute: 'Decrement Minute',
            pickSecond: 'Pick Second',
            incrementSecond: 'Increment Second',
            decrementSecond: 'Decrement Second',
            togglePeriod: 'Toggle Period',
            selectTime: 'Select Time'
        },
        useStrict: false,
        sideBySide: true,
        daysOfWeekDisabled: [],  // Allow all days of the week
        calendarWeeks: false,
        viewMode: 'days',
        toolbarPlacement: 'default',
        showTodayButton: true,
        showClear: false,  // Disable the Clear button
        showClose: true,
        widgetPositioning: {
            horizontal: 'auto',
            vertical: 'auto'
        },
        widgetParent: null,
        ignoreReadonly: false,
        keepOpen: false,
        focusOnShow: true,
        inline: false,
        keepInvalid: false,
        datepickerInput: '.datepickerinput',
        showSwitcher: true,
        debug: false,
        allowInputToggle: true,
        disabledTimeIntervals: false,
        disabledHours: false,
        enabledHours: false,
        viewDate: false,
        hijri: true,
        isRTL: true
    });

}

$(function () {
    hijriRender();
});
