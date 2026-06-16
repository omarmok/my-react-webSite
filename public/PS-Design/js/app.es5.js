// ==============================================================================
// 1. Core Framework and Initialization Checks
// ==============================================================================

// Inline SVG icons (FontAwesome removed)
"use strict";

var EYE_OPEN_SVG = "\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n<path d=\"M12 6.25C14.5705 6.25 16.7739 7.38137 18.4795 8.71289C20.1865 10.0456 21.4484 11.6196 22.1543 12.6094C22.1718 12.6339 22.19 12.6586 22.208 12.6836C22.4612 13.0357 22.75 13.4378 22.75 14C22.75 14.5622 22.4612 14.9643 22.208 15.3164C22.19 15.3414 22.1718 15.3661 22.1543 15.3906C21.4484 16.3804 20.1865 17.9544 18.4795 19.2871C16.7739 20.6186 14.5705 21.75 12 21.75C9.42952 21.75 7.22613 20.6186 5.52051 19.2871C3.81346 17.9544 2.55159 16.3804 1.8457 15.3906C1.82822 15.3661 1.80995 15.3414 1.79199 15.3164C1.53884 14.9643 1.25 14.5622 1.25 14C1.25 13.4378 1.53884 13.0357 1.79199 12.6836C1.80995 12.6586 1.82822 12.6339 1.8457 12.6094C2.55159 11.6196 3.81347 10.0456 5.52051 8.71289C7.22613 7.38137 9.42952 6.25 12 6.25ZM12 7.75C9.88134 7.75 7.99587 8.68348 6.44336 9.89551C4.89242 11.1063 3.7266 12.5547 3.06641 13.4805C2.90323 13.7093 2.82563 13.8212 2.7793 13.9102C2.74984 13.9667 2.74992 13.9829 2.75 13.998V14.002C2.74992 14.0171 2.74984 14.0333 2.7793 14.0898C2.82563 14.1788 2.90323 14.2907 3.06641 14.5195C3.7266 15.4453 4.89242 16.8937 6.44336 18.1045C7.99587 19.3165 9.88134 20.25 12 20.25C14.1187 20.25 16.0041 19.3165 17.5566 18.1045C19.1076 16.8937 20.2734 15.4453 20.9336 14.5195C21.0968 14.2907 21.1744 14.1788 21.2207 14.0898C21.2502 14.0333 21.2501 14.0171 21.25 14.002V13.998C21.2501 13.9829 21.2502 13.9667 21.2207 13.9102C21.1744 13.8212 21.0968 13.7093 20.9336 13.4805C20.2734 12.5547 19.1076 11.1063 17.5566 9.89551C16.0041 8.68348 14.1187 7.75 12 7.75ZM12 10.25C14.0711 10.25 15.75 11.9289 15.75 14C15.75 16.0711 14.0711 17.75 12 17.75C9.92893 17.75 8.25 16.0711 8.25 14C8.25 11.9289 9.92893 10.25 12 10.25ZM12 11.75C10.7574 11.75 9.75 12.7574 9.75 14C9.75 15.2426 10.7574 16.25 12 16.25C13.2426 16.25 14.25 15.2426 14.25 14C14.25 12.7574 13.2426 11.75 12 11.75ZM12 2.25C14.9796 2.25 17.6304 3.59348 19.4971 4.88281C20.4375 5.53243 21.1977 6.18175 21.7236 6.66895C21.9869 6.91282 22.1928 7.1168 22.334 7.26172C22.4046 7.33421 22.4594 7.39216 22.4971 7.43262C22.5158 7.45271 22.5307 7.46822 22.541 7.47949L22.5527 7.49316L22.5566 7.49707L22.5576 7.49902C22.5546 7.50219 22.5143 7.53947 22 8L22.5586 7.5C22.8348 7.80859 22.8085 8.28231 22.5 8.55859C22.1916 8.83468 21.7177 8.80911 21.4414 8.50098L21.4404 8.49902L21.4336 8.49121C21.4266 8.4836 21.4147 8.47147 21.3994 8.45508C21.3689 8.4223 21.3221 8.37259 21.2598 8.30859C21.1346 8.18009 20.9468 7.99337 20.7041 7.76855C20.218 7.31829 19.5135 6.7174 18.6445 6.11719C16.8919 4.9066 14.5431 3.75 12 3.75C9.45692 3.75 7.10809 4.9066 5.35547 6.11719C4.48653 6.7174 3.782 7.31829 3.2959 7.76855C3.05321 7.99337 2.86544 8.18009 2.74023 8.30859C2.67788 8.37259 2.63115 8.4223 2.60059 8.45508C2.58531 8.47147 2.57336 8.4836 2.56641 8.49121L2.55957 8.49902L2.55859 8.5C2.28225 8.8081 1.80843 8.83467 1.5 8.55859C1.19145 8.28231 1.16518 7.80859 1.44141 7.5L1.44336 7.49707L1.44727 7.49316L1.45898 7.47949C1.46928 7.46822 1.4842 7.45271 1.50293 7.43262C1.54065 7.39216 1.59538 7.33421 1.66602 7.26172C1.80721 7.1168 2.0131 6.91282 2.27637 6.66895C2.80231 6.18175 3.56247 5.53243 4.50293 4.88281C6.36956 3.59348 9.02042 2.25 12 2.25Z\" fill=\"#161616\"/>\n</svg>\n";

var EYE_CLOSED_SVG = "\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n<path d=\"M21.3761 7.58317C21.606 7.23933 22.0722 7.14639 22.4161 7.37614C22.7601 7.60612 22.853 8.07122 22.6241 8.4152C22.5571 8.51615 21.8887 9.49941 20.7247 10.6633L22.5314 12.4699C22.824 12.7628 22.8238 13.2375 22.5314 13.5304C22.3854 13.6764 22.193 13.7511 22.0011 13.7511H22.0001C21.8081 13.7511 21.6158 13.6774 21.4698 13.5304L19.6192 11.6799C18.6496 12.4956 17.4663 13.2996 16.1026 13.881L17.1427 15.6144C17.3556 15.9694 17.2408 16.4298 16.8858 16.6427C16.7648 16.7147 16.6321 16.7502 16.5011 16.7502C16.2461 16.7502 15.9985 16.6199 15.8575 16.3859L14.6573 14.3859C13.8234 14.6132 12.9362 14.7492 12.0001 14.7492V14.7502C11.0636 14.7501 10.1762 14.6144 9.3419 14.3869L8.14268 16.3859C8.00169 16.6199 7.7541 16.7501 7.49913 16.7502C7.36814 16.7502 7.23535 16.7157 7.11436 16.6427C6.75938 16.4298 6.64456 15.9694 6.85752 15.6144L7.89659 13.882C6.53307 13.3004 5.3495 12.4966 4.37999 11.6808L2.53135 13.5304C2.3854 13.6764 2.19302 13.7511 2.00108 13.7511H2.0001C1.8081 13.7511 1.61583 13.6774 1.46983 13.5304C1.17705 13.2374 1.1769 12.7628 1.46983 12.4699L3.27452 10.6642C2.11097 9.5007 1.4431 8.5171 1.37608 8.41618C1.14637 8.07122 1.2392 7.60607 1.58409 7.37614C1.92899 7.14621 2.39406 7.2394 2.62413 7.58415C2.66213 7.64015 6.48221 13.25 12.0001 13.2502C17.5181 13.2502 21.3381 7.64017 21.3761 7.58317Z\" fill=\"#161616\"/>\n</svg>\n";

// Check for jQuery and initialize core features
if (typeof jQuery === 'undefined') {
    console.error("jQuery is not loaded. Some functionalities might not work.");
} else {
    (function () {
        var setPasswordIcon = function setPasswordIcon(btn, isVisible) {
            // visible => open eye
            btn.innerHTML = isVisible ? EYE_OPEN_SVG : EYE_CLOSED_SVG;
            btn.setAttribute("aria-pressed", isVisible ? "true" : "false");
            btn.setAttribute("aria-label", isVisible ? "إخفاء كلمة المرور" : "إظهار كلمة المرور");
        };

        var initPasswordTogglesVanilla = function initPasswordTogglesVanilla() {
            // Initialize icons (so button isn't empty)
            document.querySelectorAll(".js-password-toggle").forEach(function (btn) {
                var sel = btn.getAttribute("data-target") || btn.getAttribute("data-id");
                var input = sel ? document.querySelector(sel) : null;
                var isVisible = input ? input.type === "text" : false;
                setPasswordIcon(btn, isVisible);
            });

            // Event delegation (works with dynamic DOM)
            document.addEventListener("click", function (e) {
                var btn = e.target.closest(".js-password-toggle");
                if (!btn) return;

                e.preventDefault();

                var selector = btn.getAttribute("data-target") || btn.getAttribute("data-id");
                if (!selector) {
                    console.warn("[PasswordToggle] Missing data-target/data-id on toggle button.");
                    return;
                }

                var input = document.querySelector(selector);
                if (!input) {
                    console.warn("[PasswordToggle] Input not found for selector:", selector);
                    return;
                }

                var currentType = (input.getAttribute("type") || "password").toLowerCase();
                var willShow = currentType === "password";

                input.setAttribute("type", willShow ? "text" : "password");
                setPasswordIcon(btn, willShow);
            });
        };

        var initSlickCarousels = function initSlickCarousels() {
            var $incomingReports = $('.Incoming__reports');
            if ($incomingReports.length && !$incomingReports.hasClass('slick-initialized')) {
                $incomingReports.slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    rtl: true,
                    responsive: [{ breakpoint: 1350, settings: { slidesToShow: 4, slidesToScroll: 1, infinite: true, dots: true } }, { breakpoint: 1300, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true } }, { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }]
                });
            }

            var $mostUsedServices = $('.Most__Used__Services');
            if ($mostUsedServices.length && !$mostUsedServices.hasClass('slick-initialized')) {
                $mostUsedServices.slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    rtl: true,
                    responsive: [{ breakpoint: 1350, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true } }, { breakpoint: 1300, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true } }, { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }]
                });
            }
        };

        var initAccessibilityToggles = function initAccessibilityToggles() {
            $(".darkmode").off('click').on('click', function () {
                $("body").toggleClass("body--grayscale");
            });

            $(".beta").off('click').on('click', function () {
                $("body").addClass("red");
            });

            $(".navInquirybtn").off('click').on('click', function () {
                $(".seqrchoverlay").toggleClass("d-block");
                $(".InquiryContainer").toggleClass("d-block");
            });

            $(".sun").off('click').on('click', function () {
                $(".changeaccessibility").toggleClass("textchangebg");
            });
        };

        var initFontToggleBehavior = function initFontToggleBehavior() {
            $(document).off('click', ".anotherFont").on("click", ".anotherFont", function () {
                var $body = $("body");
                var isCurrentlyDefault = $body.hasClass("defualtFont");

                $body.removeClass("cairo defualtFont");

                if (isCurrentlyDefault) {
                    $body.addClass("cairo");
                    localStorage.setItem("font", "cairo");
                } else {
                    $body.addClass("defualtFont");
                    localStorage.setItem("font", "defualtFont");
                }

                $(".font-toggle-label").text("تغيير الخط");
            });

            var storedFont = localStorage.getItem("font");
            if (storedFont === "cairo") {
                $("body").addClass("cairo");
            } else if (storedFont === "defualtFont") {
                $("body").addClass("defualtFont");
            }
        };

        // Shorthand for DOMContentLoaded/document ready
        $(function () {
            initPasswordToggles();
            initSlickCarousels();
            initFontToggleBehavior();
            initAccessibilityToggles();
        });

        // ==========================================================================
        // 2. Global AJAX Setup and Error Handling
        // ==========================================================================

        $(document).ajaxError(function (event, jqxhr, settings, thrownError) {
            var errorResponse = jqxhr.responseJSON || jqxhr.responseText;
            if (jqxhr.status !== 401 && jqxhr.status !== 404) {
                handleErrorResponse(errorResponse);
            }
        });

        $.ajaxSetup({
            beforeSend: function beforeSend(jqXHR, settings) {
                // if (typeof showLoader !== 'undefined') showLoader();
            },
            complete: function complete(jqXHR, textStatus) {
                // if (typeof hideLoader !== 'undefined') hideLoader();
            },
            error: function error(jqXHR, textStatus, errorThrown) {
                if (jqXHR.status === 404) {
                    console.error("Error 404: The requested resource was not found.");
                } else if (jqXHR.status === 401) {
                    if (typeof abp !== 'undefined' && abp.currentUser && abp.currentUser.isAuthenticated) {
                        console.warn("User is authenticated but not authorized (401).");
                    }
                    if (typeof baseUrl !== 'undefined') {
                        window.location.href = baseUrl + "/account/login";
                    } else {
                        console.error("baseUrl is not defined, cannot redirect to login.");
                    }
                } else {
                    console.error("AJAX Error (" + jqXHR.status + "): " + textStatus + ": " + errorThrown);
                    handleErrorResponse(jqXHR.responseJSON || jqXHR.responseText || { message: "An unexpected network error occurred." });
                }
            }
        });

        // ==========================================================================
        // 3. jQuery Component Functions
        // ==========================================================================
        // ===== Password Toggle (No jQuery, No FontAwesome) =====

        var EYE_OPEN_SVG = "<!-- open -->\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n<path d=\"M12 6.25C14.5705 6.25 16.7739 7.38137 18.4795 8.71289C20.1865 10.0456 21.4484 11.6196 22.1543 12.6094C22.1718 12.6339 22.19 12.6586 22.208 12.6836C22.4612 13.0357 22.75 13.4378 22.75 14C22.75 14.5622 22.4612 14.9643 22.208 15.3164C22.19 15.3414 22.1718 15.3661 22.1543 15.3906C21.4484 16.3804 20.1865 17.9544 18.4795 19.2871C16.7739 20.6186 14.5705 21.75 12 21.75C9.42952 21.75 7.22613 20.6186 5.52051 19.2871C3.81346 17.9544 2.55159 16.3804 1.8457 15.3906C1.82822 15.3661 1.80995 15.3414 1.79199 15.3164C1.53884 14.9643 1.25 14.5622 1.25 14C1.25 13.4378 1.53884 13.0357 1.79199 12.6836C1.80995 12.6586 1.82822 12.6339 1.8457 12.6094C2.55159 11.6196 3.81347 10.0456 5.52051 8.71289C7.22613 7.38137 9.42952 6.25 12 6.25ZM12 10.25C14.0711 10.25 15.75 11.9289 15.75 14C15.75 16.0711 14.0711 17.75 12 17.75C9.92893 17.75 8.25 16.0711 8.25 14C8.25 11.9289 9.92893 10.25 12 10.25ZM12 11.75C10.7574 11.75 9.75 12.7574 9.75 14C9.75 15.2426 10.7574 16.25 12 16.25C13.2426 16.25 14.25 15.2426 14.25 14C14.25 12.7574 13.2426 11.75 12 11.75Z\" fill=\"#161616\"/>\n</svg>\n";

        var EYE_CLOSED_SVG = "<!-- closed -->\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n<path d=\"M21.3761 7.58317C21.606 7.23933 22.0722 7.14639 22.4161 7.37614C22.7601 7.60612 22.853 8.07122 22.6241 8.4152C22.5571 8.51615 21.8887 9.49941 20.7247 10.6633L22.5314 12.4699C22.824 12.7628 22.8238 13.2375 22.5314 13.5304C22.3854 13.6764 22.193 13.7511 22.0011 13.7511H22.0001C21.8081 13.7511 21.6158 13.6774 21.4698 13.5304L19.6192 11.6799C18.6496 12.4956 17.4663 13.2996 16.1026 13.881L17.1427 15.6144C17.3556 15.9694 17.2408 16.4298 16.8858 16.6427C16.7648 16.7147 16.6321 16.7502 16.5011 16.7502C16.2461 16.7502 15.9985 16.6199 15.8575 16.3859L14.6573 14.3859C13.8234 14.6132 12.9362 14.7492 12.0001 14.7492V14.7502C11.0636 14.7501 10.1762 14.6144 9.3419 14.3869L8.14268 16.3859C8.00169 16.6199 7.7541 16.7501 7.49913 16.7502C7.36814 16.7502 7.23535 16.7157 7.11436 16.6427C6.75938 16.4298 6.64456 15.9694 6.85752 15.6144L7.89659 13.882C6.53307 13.3004 5.3495 12.4966 4.37999 11.6808L2.53135 13.5304C2.3854 13.6764 2.19302 13.7511 2.00108 13.7511H2.0001C1.8081 13.7511 1.61583 13.6774 1.46983 13.5304C1.17705 13.2374 1.1769 12.7628 1.46983 12.4699L3.27452 10.6642C2.11097 9.5007 1.4431 8.5171 1.37608 8.41618C1.14637 8.07122 1.2392 7.60607 1.58409 7.37614C1.92899 7.14621 2.39406 7.2394 2.62413 7.58415C2.66213 7.64015 6.48221 13.25 12.0001 13.2502C17.5181 13.2502 21.3381 7.64017 21.3761 7.58317Z\" fill=\"#161616\"/>\n</svg>\n";

        document.addEventListener("DOMContentLoaded", initPasswordTogglesVanilla);
        document.addEventListener("layout:loaded", initPasswordTogglesVanilla);
    })();
}

var fullscreenObserver = null;

var initFullscreenToggle = function initFullscreenToggle() {
    if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled)) return;
    var toggleBtn = document.querySelector('.js-toggle-fullscreen-btn');
    if (!toggleBtn) {
        if (!fullscreenObserver) {
            fullscreenObserver = new MutationObserver(function () {
                var btn = document.querySelector('.js-toggle-fullscreen-btn');
                if (btn) {
                    initFullscreenToggle();
                    fullscreenObserver.disconnect();
                    fullscreenObserver = null;
                }
            });
            fullscreenObserver.observe(document.documentElement, { childList: true, subtree: true });
        }
        return;
    }

    if (toggleBtn.dataset.fullscreenBound === "true") return;

    toggleBtn.dataset.fullscreenBound = "true";

    var styleEl = document.createElement('link');
    styleEl.setAttribute('rel', 'stylesheet');
    styleEl.addEventListener('load', function () {
        toggleBtn.hidden = false;
    });
    document.head.appendChild(styleEl);

    var handleFullscreen = function handleFullscreen() {
        if (document.fullscreen || document.webkitFullscreenElement) {
            toggleBtn.classList.add('on');
            toggleBtn.setAttribute('aria-label', 'Exit fullscreen mode');
        } else {
            toggleBtn.classList.remove('on');
            toggleBtn.setAttribute('aria-label', 'Enter fullscreen mode');
        }
    };

    toggleBtn.addEventListener('click', function () {
        if (document.fullscreen) {
            document.exitFullscreen();
        } else if (document.webkitFullscreenElement) {
            document.webkitCancelFullScreen();
        } else if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.documentElement.webkitRequestFullScreen();
        }
    });

    document.addEventListener('fullscreenchange', handleFullscreen);
    document.addEventListener('webkitfullscreenchange', handleFullscreen);
};

document.addEventListener('DOMContentLoaded', initFullscreenToggle);
document.addEventListener('layout:loaded', initFullscreenToggle);

// ==============================================================================
// 4. Utility Functions (ABP/Error/Date)
// ==============================================================================

function handleErrorResponse(error) {
    if (typeof abp === 'undefined' || !abp.notify) {
        console.error("ABP framework is not fully loaded. handleErrorResponse will not work.");
        console.error("Raw error:", error);
        return;
    }

    if (!error) {
        abp.notify.error("An unknown error occurred.");
        return;
    }

    if (error.error) {
        var customError = error.error;
        if (customError.validationErrors && customError.validationErrors.length > 0) {
            var errorMessage = customError.validationErrors[0].message;
            abp.notify.error(errorMessage);
            return;
        }
        if (customError.details) {
            abp.notify.error(customError.details);
            return;
        }
        if (customError.message) {
            abp.notify.error(customError.message);
            return;
        }
    }

    if (typeof error === 'object' && error.message) {
        abp.notify.error(error.message);
        return;
    }

    if (typeof error === 'string') {
        abp.notify.error(error);
        return;
    }

    abp.notify.error("An unexpected error occurred.");
}

function CheckPermission(permission) {
    if (typeof abp === 'undefined' || !abp.auth || !abp.localization || !abp.notify) {
        console.error("ABP framework is not fully loaded. CheckPermission will not work.");
        return false;
    }
    if (!abp.auth.isGranted(permission)) {
        abp.notify.error(abp.localization.localize("Error:NotAuthorizedMessage"), abp.localization.localize('Error:NotAuthorized'));
        return false;
    }
    return true;
}

var displayDateHjConfig = function displayDateHjConfig(gregDate) {
    if (typeof moment === 'undefined') {
        console.error("Moment.js is not loaded. displayDateHjConfig will not work.");
        return gregDate;
    }
    moment.locale('ar-sa');
    var gregorianDate = moment(gregDate, "YYYY-MM-DDTHH:mm:ss");
    if (!gregorianDate.isValid()) {
        return "Invalid Date";
    }
    return gregorianDate.format("iD iMMMM iYYYY هـ");
};

var extractTimeFromDate = function extractTimeFromDate(gregDate) {
    if (typeof moment === 'undefined') {
        console.error("Moment.js is not loaded. extractTimeFromDate will not work.");
        return gregDate;
    }
    moment.locale('ar');
    var gregorianDate = moment(gregDate);
    if (!gregorianDate.isValid()) {
        return "Invalid date";
    }
    return gregorianDate.format("h:mm a");
};

var getDayFromDate = function getDayFromDate(gregDate) {
    if (typeof moment === 'undefined') {
        console.error("Moment.js is not loaded. getDayFromDate will not work.");
        return gregDate;
    }
    moment.locale('ar');
    var gregorianDate = moment(gregDate);
    if (!gregorianDate.isValid()) {
        return "Invalid date";
    }
    return gregorianDate.format("dddd");
};

function randomNumber() {
    var minVal = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
    var maxVal = arguments.length <= 1 || arguments[1] === undefined ? 1000 : arguments[1];

    var randVal = minVal + Math.random() * (maxVal - minVal);
    return Math.round(randVal);
}

// ==============================================================================
// 5. Accessibility: Font Size, Theme, and Tooltips (Vanilla JS)
// ==============================================================================

var SIZE_KEYS = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl"];
var FONT_CLASS_REGEX = /^font-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)-(400|500|600|700)$/;
var DEFAULT_SIZE_KEY = "md";
var DEFAULT_WEIGHT_KEY = "400";
var DEFAULT_FONT_CLASS = "font-" + DEFAULT_SIZE_KEY + "-" + DEFAULT_WEIGHT_KEY;
var FONT_STORAGE_KEY = "fontSize";
var FORM_CONTROL_SELECTORS = [".form-control", ".form-select", ".input-group-text", "input:not([type=checkbox]):not([type=radio])", "select", "textarea", "button", ".btn", ".moi-btn", ".btn-size", ".Resizefont .btn", ".accessibilityPraghraphtools .btn-size"];

var activeSize = DEFAULT_SIZE_KEY;
var activeWeight = DEFAULT_WEIGHT_KEY;
var activeFontClass = DEFAULT_FONT_CLASS;
var fontControlsInitialized = false;
var fontAnchorObserver = null;
var pxToFontClassMap = null;

function buildFontClass(size, weight) {
    return "font-" + size + "-" + weight;
}

function parseFontClass(value) {
    if (!value) return null;
    var match = value.match(FONT_CLASS_REGEX);
    if (!match) return null;
    return {
        className: match[0],
        size: match[1],
        weight: match[2]
    };
}

function findFontClassOnNode(node) {
    if (!node || !node.classList) return null;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Array.from(node.classList)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var cls = _step.value;

            var parsed = parseFontClass(cls);
            if (parsed) return parsed;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
                _iterator["return"]();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return null;
}

function clearFontClasses(node) {
    if (!node || !node.classList) return;
    Array.from(node.classList).forEach(function (cls) {
        if (FONT_CLASS_REGEX.test(cls)) {
            node.classList.remove(cls);
        }
    });
}

function mapPxValueToClass(value) {
    if (!value || !document.body) return null;
    if (!pxToFontClassMap) {
        (function () {
            var map = new Map();
            var dummy = document.createElement("div");
            dummy.style.position = "absolute";
            dummy.style.visibility = "hidden";
            dummy.style.pointerEvents = "none";
            document.body.appendChild(dummy);

            SIZE_KEYS.forEach(function (size) {
                dummy.className = "";
                dummy.classList.add(buildFontClass(size, DEFAULT_WEIGHT_KEY));
                var computed = getComputedStyle(dummy).fontSize;
                if (!computed) return;
                map.set(computed, buildFontClass(size, DEFAULT_WEIGHT_KEY));
                var numeric = parseFloat(computed);
                if (!Number.isNaN(numeric)) {
                    map.set(numeric, buildFontClass(size, DEFAULT_WEIGHT_KEY));
                }
            });

            document.body.removeChild(dummy);
            pxToFontClassMap = map;
        })();
    }

    var normalized = value.trim();
    if (pxToFontClassMap.has(normalized)) return pxToFontClassMap.get(normalized);
    var numeric = parseFloat(normalized);
    if (!Number.isNaN(numeric) && pxToFontClassMap.has(numeric)) {
        return pxToFontClassMap.get(numeric);
    }
    return null;
}

function resolveStoredFontClass(defaultClass) {
    var stored = localStorage.getItem(FONT_STORAGE_KEY);
    if (!stored) return defaultClass;
    var parsed = parseFontClass(stored);
    if (parsed) return parsed.className;
    var mapped = mapPxValueToClass(stored);
    if (mapped) return mapped;
    return defaultClass;
}

function applyFontClass(className) {
    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var _ref$persist = _ref.persist;
    var persist = _ref$persist === undefined ? true : _ref$persist;

    var parsed = parseFontClass(className) || parseFontClass(DEFAULT_FONT_CLASS);
    if (!parsed) return;

    var root = document.documentElement || document.body;
    if (!root) return;
    clearFontClasses(root);
    root.classList.add(buildFontClass(parsed.size, parsed.weight));

    activeSize = parsed.size;
    activeWeight = parsed.weight;
    activeFontClass = buildFontClass(activeSize, activeWeight);

    updateFontButtonStates();
    normalizeAnchorsFontClass();
    normalizeDataSizeElements();
    normalizeFormControls();

    if (persist) {
        localStorage.setItem(FONT_STORAGE_KEY, activeFontClass);
    }
}

function shiftFontSize(step) {
    var currentIndex = SIZE_KEYS.indexOf(activeSize);
    var baseIndex = currentIndex === -1 ? SIZE_KEYS.indexOf(DEFAULT_SIZE_KEY) : currentIndex;
    var nextIndex = Math.max(0, Math.min(SIZE_KEYS.length - 1, baseIndex + step));
    var nextSize = SIZE_KEYS[nextIndex];
    applyFontClass(buildFontClass(nextSize, activeWeight));
}

function normalizeAnchorsFontClass() {
    var element = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];

    element.querySelectorAll("a[href]").forEach(function (anchor) {
        var existing = findFontClassOnNode(anchor);
        if (!existing) return;
        var targetClass = buildFontClass(activeSize, existing.weight);
        anchor.classList.remove(existing.className);
        anchor.classList.add(targetClass);
    });
}

function needsFormControlFallback(element) {
    if (!element || !element.matches) return false;
    if (element.style.fontSize) return true;
    var computed = parseFloat(getComputedStyle(element).fontSize);
    var rootFont = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return Math.abs(computed - rootFont) > 0.1;
}

function normalizeFormControls() {
    var root = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];

    var processed = new Set();
    var normalized = 0;
    FORM_CONTROL_SELECTORS.forEach(function (selector) {
        root.querySelectorAll(selector).forEach(function (element) {
            if (processed.has(element)) return;
            processed.add(element);
            var existing = findFontClassOnNode(element);
            if (existing) {
                var targetClass = buildFontClass(activeSize, existing.weight);
                if (existing.className !== targetClass) {
                    clearFontClasses(element);
                    element.classList.add(targetClass);
                }
                normalized += 1;
                return;
            }

            if (needsFormControlFallback(element)) {
                clearFontClasses(element);
                element.classList.add(buildFontClass(activeSize, activeWeight || DEFAULT_WEIGHT_KEY));
                normalized += 1;
            }
        });
    });
    if (window.__FONT_DEBUG__ === true) {
        console.info("[Font Debug] normalized " + normalized + " form controls");
    }
    return normalized;
}

function ensureDataSizeBaseline(element) {
    var sizeValue = element.getAttribute("data-size");
    if (!SIZE_KEYS.includes(sizeValue)) return;

    var existing = findFontClassOnNode(element);
    if (existing) {
        element.dataset.originalWeight = existing.weight;
        return;
    }

    var fallbackWeight = element.dataset.originalWeight || DEFAULT_WEIGHT_KEY;
    element.dataset.originalWeight = fallbackWeight;
    clearFontClasses(element);
    element.classList.add(buildFontClass(sizeValue, fallbackWeight));
}

function normalizeDataSizeElement(element) {
    var sizeValue = element.getAttribute("data-size");
    if (!SIZE_KEYS.includes(sizeValue)) return;

    var existing = findFontClassOnNode(element);
    var weight = element.dataset.originalWeight;
    if (existing) {
        weight = existing.weight;
    }
    weight = weight || DEFAULT_WEIGHT_KEY;
    element.dataset.originalWeight = weight;

    clearFontClasses(element);
    element.classList.add(buildFontClass(activeSize, weight));
}

function normalizeDataSizeElements() {
    var root = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];

    root.querySelectorAll("[data-size]").forEach(normalizeDataSizeElement);
}

function updateFontButtonStates() {
    var defaultIndex = SIZE_KEYS.indexOf(DEFAULT_SIZE_KEY);
    var currentIndex = SIZE_KEYS.indexOf(activeSize);

    document.querySelectorAll(".Resizefont .btn").forEach(function (btn) {
        btn.classList.remove("active");
        var label = btn.textContent.trim();
        if (label === "-A" && currentIndex <= 0 && currentIndex !== -1) {
            btn.classList.add("active");
            return;
        }
        if (label === "A" && currentIndex === defaultIndex) {
            btn.classList.add("active");
            return;
        }
        if ((label === "+A" || label === "A++" || btn.classList.contains("btn-18")) && currentIndex > defaultIndex) {
            btn.classList.add("active");
        }
    });
}

function handleResizeFontButton(btn) {
    var label = btn.textContent.trim();
    if (btn.classList.contains("btn-18") || label === "+A" || label === "A++") {
        shiftFontSize(1);
        return;
    }
    if (label === "-A" || btn.classList.contains("btn-10") || btn.classList.contains("btn-10-p")) {
        shiftFontSize(-1);
        return;
    }
    if (label === "A") {
        applyFontClass(DEFAULT_FONT_CLASS);
    }
}

function bindResizeFontButtons() {
    document.querySelectorAll(".Resizefont .btn").forEach(function (btn) {
        if (btn.dataset.fontBound === "true") return;
        btn.dataset.fontBound = "true";
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            handleResizeFontButton(btn);
        });
    });
}

function observeFontAnchors() {
    if (fontAnchorObserver) return;
    if (!document.body) return;
    fontAnchorObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            mutation.addedNodes.forEach(function (node) {
                if (node.nodeType !== Node.ELEMENT_NODE) return;
                if (node.matches && node.matches("[data-size]")) {
                    ensureDataSizeBaseline(node);
                    normalizeDataSizeElement(node);
                }
                normalizeAnchorsFontClass(node);
                normalizeDataSizeElements(node);
                normalizeFormControls(node);
            });
        });
    });
    fontAnchorObserver.observe(document.body, { childList: true, subtree: true });
}

function runFontControlsSelfTest() {
    if (window.__FONT_DEBUG__ !== true) return;
    var sampleAnchors = document.querySelectorAll("a[href]");
    console.group("[Font Debug] Self-test");
    console.info("[Font Debug] root class: " + activeFontClass);
    console.info("[Font Debug] anchors processed: " + sampleAnchors.length);
    var dataSizeElements = document.querySelectorAll("[data-size]");
    console.info("[Font Debug] data-size elements normalized: " + dataSizeElements.length);
    var normalizedFormControls = normalizeFormControls();
    console.info("[Font Debug] form controls normalized: " + normalizedFormControls);

    var initialSize = activeSize;
    var initialWeight = activeWeight;
    shiftFontSize(1);
    shiftFontSize(1);
    shiftFontSize(-1);

    var finalClass = activeFontClass;
    var storedClass = localStorage.getItem(FONT_STORAGE_KEY);
    console.assert(storedClass === finalClass, "[Font Debug] storage mismatch (" + storedClass + " vs " + finalClass + ")");

    var root = document.documentElement || document.body;
    var matchingClasses = Array.from(root.classList).filter(function (cls) {
        return FONT_CLASS_REGEX.test(cls);
    });
    console.assert(matchingClasses.length === 1, "[Font Debug] expected 1 root font class, found " + matchingClasses.length);

    Array.from(sampleAnchors).slice(0, 5).forEach(function (anchor) {
        var anchorClass = findFontClassOnNode(anchor);
        if (!anchorClass) return;
        console.assert(anchorClass.className === finalClass || anchorClass.className.startsWith("font-" + activeSize + "-"), "[Font Debug] anchor size mismatch");
    });

    var dataSizeSample = document.querySelector('[data-size="lg"]');
    if (dataSizeSample) {
        var sampleFont = findFontClassOnNode(dataSizeSample);
        console.assert(sampleFont && sampleFont.size === activeSize, "[Font Debug] data-size sample did not follow global size");
    }

    applyFontClass(buildFontClass(initialSize, initialWeight));
    console.groupEnd();
}

function initFontSizeControls() {
    if (!document.body) return;
    document.querySelectorAll("[data-size]").forEach(ensureDataSizeBaseline);
    var rootClass = findFontClassOnNode(document.documentElement) || findFontClassOnNode(document.body) || parseFontClass(DEFAULT_FONT_CLASS);
    var initialClass = resolveStoredFontClass(rootClass && rootClass.className || DEFAULT_FONT_CLASS);
    applyFontClass(initialClass, { persist: false });
    bindResizeFontButtons();
    observeFontAnchors();
    if (!fontControlsInitialized) {
        fontControlsInitialized = true;
        runFontControlsSelfTest();
    }
}

document.addEventListener("DOMContentLoaded", initFontSizeControls);
document.addEventListener("layout:loaded", initFontSizeControls);

var applyThemeColor = function applyThemeColor(color) {
    var id = "theme-color-overrides";
    var styleEl = document.getElementById(id);
    if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = id;
        document.head.appendChild(styleEl);
    }

    styleEl.textContent = "\n:root { --color_change: " + color + "; --theme-primary: " + color + "; }\n.Primary-500, .text-Primary-500, .green-100Color, .primaryprioroty,\n.primaryprioroty-rounded, .primaryprioroty-filled {\n    color: var(--theme-primary) !important;\n    fill: var(--theme-primary) !important;\n}\n.bg-Primary-500, .green-100, .primaryprioroty, .primaryprioroty-filled,\n.moi-btn--Primary, .moi-btn--Primary:hover, .moi-btn--Primary:focus,\n.paginationContainer ul.pagination .page-link.active,\n.paginationContainer ul.pagination .active > .page-link {\n    background-color: var(--theme-primary) !important;\n    border-color: var(--theme-primary) !important;\n    color: #fff !important;\n}\n.border-Primary-500 { border-color: var(--theme-primary) !important; }\n";
};

var getDefaultThemeColor = function getDefaultThemeColor() {
    if (window.__defaultThemeColor) return window.__defaultThemeColor;
    var computed = getComputedStyle(document.documentElement).getPropertyValue("--color_change").trim() || "#25935f";
    window.__defaultThemeColor = computed;
    return window.__defaultThemeColor;
};

var bindThemeResetButtons = function bindThemeResetButtons() {
    var defaultColor = getDefaultThemeColor();
    document.querySelectorAll("[data-reset-theme-color]").forEach(function (btn) {
        if (btn.dataset.resetBound === "true") return;
        btn.dataset.resetBound = "true";
        btn.addEventListener("click", function () {
            applyThemeColor(defaultColor);
            localStorage.removeItem("color");
            document.querySelectorAll(".colorpicker").forEach(function (input) {
                input.value = defaultColor;
            });
        });
    });
};

var initThemePickers = function initThemePickers() {
    var defaultColor = getDefaultThemeColor();
    var savedColor = localStorage.getItem("color") || defaultColor;

    applyThemeColor(savedColor);

    var pickers = document.querySelectorAll(".colorpicker");

    if (!pickers.length && !window.__colorPickerObserver) {
        window.__colorPickerObserver = new MutationObserver(function () {
            if (document.querySelector(".colorpicker")) {
                initThemePickers();
                window.__colorPickerObserver.disconnect();
                window.__colorPickerObserver = null;
            }
        });
        window.__colorPickerObserver.observe(document.documentElement, { childList: true, subtree: true });
        return;
    }

    pickers.forEach(function (input) {
        if (input.dataset.colorBound === "true") return;
        input.dataset.colorBound = "true";
        input.value = savedColor;
        input.addEventListener("input", function (e) {
            var newColor = e.target.value;
            applyThemeColor(newColor);
            localStorage.setItem("color", newColor);
        });
    });

    bindThemeResetButtons();
};

document.addEventListener("DOMContentLoaded", initThemePickers);
document.addEventListener("layout:loaded", initThemePickers);

var initTooltips = function initTooltips() {
    if (typeof bootstrap === "undefined" || !bootstrap.Tooltip) return;
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
        if (el._tooltip) {
            el._tooltip.dispose();
            el._tooltip = null;
        }
        var trigger = el.getAttribute("data-bs-trigger") || "hover focus";
        var placement = el.getAttribute("data-bs-placement") || undefined;
        el._tooltip = new bootstrap.Tooltip(el, {
            trigger: trigger,
            placement: placement,
            container: "body"
        });
    });
};

document.addEventListener("DOMContentLoaded", initTooltips);
document.addEventListener("layout:loaded", initTooltips);

// ==============================================================================
// 6. Sidebar Navigation (Vanilla JS)
// ==============================================================================

var body = document.querySelector('body');
var sidebar = body ? body.querySelector('nav') : null;
var toggle = body ? body.querySelector(".toggle") : null;
var arrows = document.querySelectorAll(".arrow");

if (toggle && sidebar) {
    toggle.addEventListener("click", function () {
        sidebar.classList.toggle("close");
    });
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = arrows[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var arrow = _step2.value;

        arrow.addEventListener("click", function (e) {
            var arrowParent = e.target.closest('li');
            if (arrowParent) {
                arrowParent.classList.toggle("showMenu");
            }
        });
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
            _iterator2["return"]();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var listItems = document.querySelectorAll("li");
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    var _loop = function () {
        var li = _step3.value;

        li.addEventListener("click", function (e) {
            var arrow = li.querySelector(".arrow");
            if (arrow && !arrow.contains(e.target)) {
                li.classList.toggle("showMenu");
            } else if (!arrow) {
                // leave as-is
            }
        });
    };

    for (var _iterator3 = listItems[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        _loop();
    }

    // ==============================================================================
    // 7. File Download/Preview Controls
    // ==============================================================================
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
            _iterator3["return"]();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

function wireDownloadOpenControls(blobUrl, filename) {
    if (typeof $ === 'undefined') {
        console.error("jQuery is required for wireDownloadOpenControls.");
        return;
    }

    $('#previewControls').show();
    $('#previewFileName').text(filename || '');

    var clientDownload = function clientDownload() {
        var a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename || 'file';
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    var clientOpen = function clientOpen() {
        window.open(blobUrl, '_blank', 'noopener');
    };

    $('#downloadPreviewBtn').off('click').on('click', function () {
        var id = $('#previewFileId').val();
        var type = $('#previewFileType').val() || '';

        $.ajax({
            url: baseUrl + '/index?handler=DownloadFile&fileId=' + encodeURIComponent(id) + '&type=' + encodeURIComponent(type),
            method: 'GET'
        }).done(clientDownload).fail(function (xhr, status, error) {
            console.error('Error in server log/fetch, falling back to client download:', error);
            clientDownload();
        });
    });

    $('#openInNewTabBtn').off('click').on('click', function () {
        var id = $('#previewFileId').val();
        var type = $('#previewFileType').val() || '';

        $.ajax({
            url: baseUrl + '/index?handler=PrintFile&fileId=' + encodeURIComponent(id) + '&type=' + encodeURIComponent(type),
            method: 'GET'
        }).done(clientOpen).fail(function (xhr, status, error) {
            console.error('Error in server log/fetch, falling back to client open:', error);
            clientOpen();
        });
    });
}

var showLoader = function showLoader() {
    if (typeof $ !== 'undefined') {
        $("#loaderDiv").css("display", "block");
    }
};

var hideLoader = function hideLoader() {
    if (typeof $ !== 'undefined') {
        $("#loaderDiv").css("display", "none");
    }
};

// ==============================================================================
// 8. File Upload Area Logic (Vanilla JS)
// ==============================================================================

var uploadArea = document.querySelector('#uploadArea');
var dropZoon = document.querySelector('#dropZoon');
var loadingText = document.querySelector('#loadingText');
var fileInput = document.querySelector('#fileInput');
var previewImage = document.querySelector('#previewImage');
var fileDetails = document.querySelector('#fileDetails');
var uploadedFile = document.querySelector('#uploadedFile');
var uploadedFileInfo = document.querySelector('#uploadedFileInfo');
var uploadedFileName = document.querySelector('.uploaded-file__name');
var uploadedFileIconText = document.querySelector('.uploaded-file__icon-text');
var uploadedFileCounter = document.querySelector('.uploaded-file__counter');

var imagesTypes = ["jpeg", "png", "svg", "gif"];
var maxFileSize = 2 * 1024 * 1024;

if (dropZoon) {
    dropZoon.addEventListener('dragover', function (event) {
        event.preventDefault();
        dropZoon.classList.add('drop-zoon--over');
    });

    dropZoon.addEventListener('dragleave', function () {
        dropZoon.classList.remove('drop-zoon--over');
    });

    dropZoon.addEventListener('drop', function (event) {
        event.preventDefault();
        dropZoon.classList.remove('drop-zoon--over');
        var file = event.dataTransfer.files[0];
        if (file) {
            uploadFile(file);
        }
    });

    dropZoon.addEventListener('click', function () {
        if (fileInput) fileInput.click();
    });
}

if (fileInput) {
    fileInput.addEventListener('change', function (event) {
        var file = event.target.files[0];
        if (file) {
            uploadFile(file);
        }
    });
}

function uploadFile(file) {
    var fileReader = new FileReader();
    var fileType = file.type;
    var fileSize = file.size;

    if (fileValidate(fileType, fileSize)) {
        if (dropZoon) dropZoon.classList.add('drop-zoon--Uploaded');
        if (loadingText) loadingText.style.display = "block";
        if (previewImage) previewImage.style.display = 'none';

        if (uploadedFile) uploadedFile.classList.remove('uploaded-file--open');
        if (uploadedFileInfo) uploadedFileInfo.classList.remove('uploaded-file__info--active');

        fileReader.addEventListener('load', function () {
            setTimeout(function () {
                if (uploadArea) uploadArea.classList.add('upload-area--open');
                if (loadingText) loadingText.style.display = "none";
                if (previewImage) {
                    previewImage.style.display = 'block';
                    previewImage.setAttribute('src', fileReader.result);
                }

                if (fileDetails) fileDetails.classList.add('file-details--open');
                if (uploadedFile) uploadedFile.classList.add('uploaded-file--open');
                if (uploadedFileInfo) uploadedFileInfo.classList.add('uploaded-file__info--active');

                if (uploadedFileName) uploadedFileName.textContent = file.name;
                progressMove();
            }, 500);
        });
        fileReader.readAsDataURL(file);
    }
}

function progressMove() {
    var counter = 0;
    setTimeout(function () {
        var counterIncrease = setInterval(function () {
            if (counter >= 100) {
                clearInterval(counterIncrease);
            } else {
                counter = counter + 10;
                if (uploadedFileCounter) uploadedFileCounter.textContent = Math.min(counter, 100) + "%";
            }
        }, 100);
    }, 600);
}

function fileValidate(fileType, fileSize) {
    var isImageArray = imagesTypes.filter(function (type) {
        return fileType.includes(type);
    });

    if (isImageArray.length === 0) {
        alert('Please make sure to upload an Image File Type (JPEG, PNG, SVG, GIF).');
        return false;
    }

    if (uploadedFileIconText) {
        var fileExt = isImageArray[0].toLowerCase();
        uploadedFileIconText.textContent = fileExt === 'jpeg' ? 'jpg' : fileExt;
    }

    if (fileSize > maxFileSize) {
        alert('Please Your File Should be 2 Megabytes or Less.');
        return false;
    }

    return true;
}

// ==============================================================================
// 9. Utility Validation Functions
// ==============================================================================

function isNumberNotEmpty(value) {
    return value !== null && value !== undefined && value !== '' && !isNaN(Number(value));
}

function isObjectNotEmpty(obj) {
    if (obj === null || obj === undefined) {
        return false;
    }
    return typeof obj === 'object' && Object.keys(obj).length > 0;
}

function isBase64Image(base64String) {
    var imageSignatures = {
        jpeg: ["ffd8ffe0", "ffd8ffe1", "ffd8ffe2", "ffd8ffe3", "ffd8ffe8"],
        png: ["89504e47"],
        gif: ["47494638"],
        bmp: ["424d"],
        webp: ["52494646"]
    };

    try {
        var decodedData = atob(base64String);
        var hexString = '';
        for (var i = 0; i < Math.min(decodedData.length, 4); i++) {
            var hex = decodedData.charCodeAt(i).toString(16);
            hex = hex.length === 1 ? '0' + hex : hex;
            hexString += hex;
        }

	        for (var format in imageSignatures) {
	            if (!Object.prototype.hasOwnProperty.call(imageSignatures, format)) continue;
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = imageSignatures[format][Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var signature = _step4.value;

                    if (hexString.startsWith(signature)) {
                        return { isImage: true, format: format };
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
                        _iterator4["return"]();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    } catch (e) {
        console.error("Error decoding base64 string:", e);
        return { isImage: false, format: null };
    }
    return { isImage: false, format: null };
}
