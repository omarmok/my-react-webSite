// ==============================================================================
// 1. Core Framework and Initialization Checks
// ==============================================================================

// Check for jQuery and initialize core features
if (typeof jQuery === "undefined") {
  console.error("jQuery is not loaded. Some functionalities might not work.");
} else {
  // Shorthand for DOMContentLoaded/document ready
  $(function () {
    initPasswordTogglesVanilla();
    initSlickCarousels();
    initFontToggleBehavior();
    initAccessibilityToggles();
  });

  // ==========================================================================
  // 2. Global AJAX Setup and Error Handling
  // ==========================================================================

  $(document).ajaxError(function (event, jqxhr, settings, thrownError) {
    let errorResponse = jqxhr.responseJSON || jqxhr.responseText;
    if (jqxhr.status !== 401 && jqxhr.status !== 404) {
      handleErrorResponse(errorResponse);
    }
  });

  $.ajaxSetup({
    beforeSend: function (jqXHR, settings) {
      // if (typeof showLoader !== 'undefined') showLoader();
    },
    complete: function (jqXHR, textStatus) {
      // if (typeof hideLoader !== 'undefined') hideLoader();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      if (jqXHR.status === 404) {
        console.error("Error 404: The requested resource was not found.");
      } else if (jqXHR.status === 401) {
        if (
          typeof abp !== "undefined" &&
          abp.currentUser &&
          abp.currentUser.isAuthenticated
        ) {
          console.warn("User is authenticated but not authorized (401).");
        }
        if (typeof baseUrl !== "undefined") {
          window.location.href = baseUrl + "/account/login";
        } else {
          console.error("baseUrl is not defined, cannot redirect to login.");
        }
      } else {
        console.error(
          `AJAX Error (${jqXHR.status}): ${textStatus}: ${errorThrown}`,
        );
        handleErrorResponse(
          jqXHR.responseJSON ||
            jqXHR.responseText || {
              message: "An unexpected network error occurred.",
            },
        );
      }
    },
  });

  // ==========================================================================
  // 3. jQuery Component Functions
  // ==========================================================================
  // ===== Password Toggle (No jQuery, No FontAwesome) =====

  const EYE_OPEN_SVG = `<!-- open -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
<path d="M12 6.25C14.5705 6.25 16.7739 7.38137 18.4795 8.71289C20.1865 10.0456 21.4484 11.6196 22.1543 12.6094C22.1718 12.6339 22.19 12.6586 22.208 12.6836C22.4612 13.0357 22.75 13.4378 22.75 14C22.75 14.5622 22.4612 14.9643 22.208 15.3164C22.19 15.3414 22.1718 15.3661 22.1543 15.3906C21.4484 16.3804 20.1865 17.9544 18.4795 19.2871C16.7739 20.6186 14.5705 21.75 12 21.75C9.42952 21.75 7.22613 20.6186 5.52051 19.2871C3.81346 17.9544 2.55159 16.3804 1.8457 15.3906C1.82822 15.3661 1.80995 15.3414 1.79199 15.3164C1.53884 14.9643 1.25 14.5622 1.25 14C1.25 13.4378 1.53884 13.0357 1.79199 12.6836C1.80995 12.6586 1.82822 12.6339 1.8457 12.6094C2.55159 11.6196 3.81347 10.0456 5.52051 8.71289C7.22613 7.38137 9.42952 6.25 12 6.25ZM12 10.25C14.0711 10.25 15.75 11.9289 15.75 14C15.75 16.0711 14.0711 17.75 12 17.75C9.92893 17.75 8.25 16.0711 8.25 14C8.25 11.9289 9.92893 10.25 12 10.25ZM12 11.75C10.7574 11.75 9.75 12.7574 9.75 14C9.75 15.2426 10.7574 16.25 12 16.25C13.2426 16.25 14.25 15.2426 14.25 14C14.25 12.7574 13.2426 11.75 12 11.75Z" fill="#161616"/>
</svg>
`;

  const EYE_CLOSED_SVG = `<!-- closed -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
<path d="M21.3761 7.58317C21.606 7.23933 22.0722 7.14639 22.4161 7.37614C22.7601 7.60612 22.853 8.07122 22.6241 8.4152C22.5571 8.51615 21.8887 9.49941 20.7247 10.6633L22.5314 12.4699C22.824 12.7628 22.8238 13.2375 22.5314 13.5304C22.3854 13.6764 22.193 13.7511 22.0011 13.7511H22.0001C21.8081 13.7511 21.6158 13.6774 21.4698 13.5304L19.6192 11.6799C18.6496 12.4956 17.4663 13.2996 16.1026 13.881L17.1427 15.6144C17.3556 15.9694 17.2408 16.4298 16.8858 16.6427C16.7648 16.7147 16.6321 16.7502 16.5011 16.7502C16.2461 16.7502 15.9985 16.6199 15.8575 16.3859L14.6573 14.3859C13.8234 14.6132 12.9362 14.7492 12.0001 14.7492V14.7502C11.0636 14.7501 10.1762 14.6144 9.3419 14.3869L8.14268 16.3859C8.00169 16.6199 7.7541 16.7501 7.49913 16.7502C7.36814 16.7502 7.23535 16.7157 7.11436 16.6427C6.75938 16.4298 6.64456 15.9694 6.85752 15.6144L7.89659 13.882C6.53307 13.3004 5.3495 12.4966 4.37999 11.6808L2.53135 13.5304C2.3854 13.6764 2.19302 13.7511 2.00108 13.7511H2.0001C1.8081 13.7511 1.61583 13.6774 1.46983 13.5304C1.17705 13.2374 1.1769 12.7628 1.46983 12.4699L3.27452 10.6642C2.11097 9.5007 1.4431 8.5171 1.37608 8.41618C1.14637 8.07122 1.2392 7.60607 1.58409 7.37614C1.92899 7.14621 2.39406 7.2394 2.62413 7.58415C2.66213 7.64015 6.48221 13.25 12.0001 13.2502C17.5181 13.2502 21.3381 7.64017 21.3761 7.58317Z" fill="#161616"/>
</svg>
`;

  function setPasswordIcon(btn, isVisible) {
    // visible => open eye
    btn.innerHTML = isVisible ? EYE_OPEN_SVG : EYE_CLOSED_SVG;
    btn.setAttribute("aria-pressed", isVisible ? "true" : "false");
    btn.setAttribute(
      "aria-label",
      isVisible ? "إخفاء كلمة المرور" : "إظهار كلمة المرور",
    );
  }

  function initPasswordTogglesVanilla() {
    // Initialize icons (so button isn't empty)
    document.querySelectorAll(".js-password-toggle").forEach((btn) => {
      const sel =
        btn.getAttribute("data-target") || btn.getAttribute("data-id");
      const input = sel ? document.querySelector(sel) : null;
      const isVisible = input ? input.type === "text" : false;
      setPasswordIcon(btn, isVisible);
    });

    // Event delegation (works with dynamic DOM)
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".js-password-toggle");
      if (!btn) return;

      e.preventDefault();

      const selector =
        btn.getAttribute("data-target") || btn.getAttribute("data-id");
      if (!selector) {
        console.warn(
          "[PasswordToggle] Missing data-target/data-id on toggle button.",
        );
        return;
      }

      const input = document.querySelector(selector);
      if (!input) {
        console.warn(
          "[PasswordToggle] Input not found for selector:",
          selector,
        );
        return;
      }

      const currentType = (
        input.getAttribute("type") || "password"
      ).toLowerCase();
      const willShow = currentType === "password";

      input.setAttribute("type", willShow ? "text" : "password");
      setPasswordIcon(btn, willShow);
    });
  }

  document.addEventListener("DOMContentLoaded", initPasswordTogglesVanilla);
  document.addEventListener("layout:loaded", initPasswordTogglesVanilla);

  function initSlickCarousels() {
    if (typeof $.fn.slick === "undefined") return;
    const $incomingReports = $(".Incoming__reports");
    if (
      $incomingReports.length &&
      !$incomingReports.hasClass("slick-initialized")
    ) {
      $incomingReports.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        rtl: true,
        responsive: [
          {
            breakpoint: 1350,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      });
    }

    const $mostUsedServices = $(".Most__Used__Services");
    if (
      $mostUsedServices.length &&
      !$mostUsedServices.hasClass("slick-initialized")
    ) {
      $mostUsedServices.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 6000,
        rtl: true,
        responsive: [
          {
            breakpoint: 1350,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      });
    }
  }

  function initAccessibilityToggles() {
    $(".darkmode")
      .off("click")
      .on("click", function () {
        $("body").toggleClass("body--grayscale");
      });

    $(".beta")
      .off("click")
      .on("click", function () {
        $("body").addClass("red");
      });

    $(".navInquirybtn")
      .off("click")
      .on("click", function () {
        $(".seqrchoverlay").toggleClass("d-block");
        $(".InquiryContainer").toggleClass("d-block");
      });

    $(".sun")
      .off("click")
      .on("click", function () {
        $(".changeaccessibility").toggleClass("textchangebg");
      });
  }

  function initFontToggleBehavior() {
    $(document)
      .off("click", ".anotherFont")
      .on("click", ".anotherFont", function () {
        const $body = $("body");
        const isCurrentlyDefault = $body.hasClass("defualtFont");

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

    const storedFont = localStorage.getItem("font");
    if (storedFont === "cairo") {
      $("body").addClass("cairo");
    } else if (storedFont === "defualtFont") {
      $("body").addClass("defualtFont");
    }
  }
}

let fullscreenObserver = null;

const initFullscreenToggle = () => {
  if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled)) return;
  const toggleBtn = document.querySelector(".js-toggle-fullscreen-btn");
  if (!toggleBtn) {
    if (!fullscreenObserver) {
      fullscreenObserver = new MutationObserver(() => {
        const btn = document.querySelector(".js-toggle-fullscreen-btn");
        if (btn) {
          initFullscreenToggle();
          fullscreenObserver.disconnect();
          fullscreenObserver = null;
        }
      });
      fullscreenObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    }
    return;
  }

  if (toggleBtn.dataset.fullscreenBound === "true") return;

  toggleBtn.dataset.fullscreenBound = "true";

  const styleEl = document.createElement("link");
  styleEl.setAttribute("rel", "stylesheet");
  styleEl.addEventListener("load", function () {
    toggleBtn.hidden = false;
  });
  document.head.appendChild(styleEl);

  const handleFullscreen = () => {
    if (document.fullscreen || document.webkitFullscreenElement) {
      toggleBtn.classList.add("on");
      toggleBtn.setAttribute("aria-label", "Exit fullscreen mode");
    } else {
      toggleBtn.classList.remove("on");
      toggleBtn.setAttribute("aria-label", "Enter fullscreen mode");
    }
  };

  toggleBtn.addEventListener("click", function () {
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

  document.addEventListener("fullscreenchange", handleFullscreen);
  document.addEventListener("webkitfullscreenchange", handleFullscreen);
};

document.addEventListener("DOMContentLoaded", initFullscreenToggle);
document.addEventListener("layout:loaded", initFullscreenToggle);

// ==============================================================================
// 4. Utility Functions (ABP/Error/Date)
// ==============================================================================

function handleErrorResponse(error) {
  if (typeof abp === "undefined" || !abp.notify) {
    console.error(
      "ABP framework is not fully loaded. handleErrorResponse will not work.",
    );
    console.error("Raw error:", error);
    return;
  }

  if (!error) {
    abp.notify.error("An unknown error occurred.");
    return;
  }

  if (error.error) {
    const customError = error.error;
    if (
      customError.validationErrors &&
      customError.validationErrors.length > 0
    ) {
      const errorMessage = customError.validationErrors[0].message;
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

  if (typeof error === "object" && error.message) {
    abp.notify.error(error.message);
    return;
  }

  if (typeof error === "string") {
    abp.notify.error(error);
    return;
  }

  abp.notify.error("An unexpected error occurred.");
}

function CheckPermission(permission) {
  if (
    typeof abp === "undefined" ||
    !abp.auth ||
    !abp.localization ||
    !abp.notify
  ) {
    console.error(
      "ABP framework is not fully loaded. CheckPermission will not work.",
    );
    return false;
  }
  if (!abp.auth.isGranted(permission)) {
    abp.notify.error(
      abp.localization.localize("Error:NotAuthorizedMessage"),
      abp.localization.localize("Error:NotAuthorized"),
    );
    return false;
  }
  return true;
}

const displayDateHjConfig = (gregDate) => {
  if (typeof moment === "undefined") {
    console.error(
      "Moment.js is not loaded. displayDateHjConfig will not work.",
    );
    return gregDate;
  }
  moment.locale("ar-sa");
  const gregorianDate = moment(gregDate, "YYYY-MM-DDTHH:mm:ss");
  if (!gregorianDate.isValid()) {
    return "Invalid Date";
  }
  return gregorianDate.format("iD iMMMM iYYYY هـ");
};

const extractTimeFromDate = (gregDate) => {
  if (typeof moment === "undefined") {
    console.error(
      "Moment.js is not loaded. extractTimeFromDate will not work.",
    );
    return gregDate;
  }
  moment.locale("ar");
  const gregorianDate = moment(gregDate);
  if (!gregorianDate.isValid()) {
    return "Invalid date";
  }
  return gregorianDate.format("h:mm a");
};

const getDayFromDate = (gregDate) => {
  if (typeof moment === "undefined") {
    console.error("Moment.js is not loaded. getDayFromDate will not work.");
    return gregDate;
  }
  moment.locale("ar");
  const gregorianDate = moment(gregDate);
  if (!gregorianDate.isValid()) {
    return "Invalid date";
  }
  return gregorianDate.format("dddd");
};

function randomNumber(minVal = 1, maxVal = 1000) {
  const randVal = minVal + Math.random() * (maxVal - minVal);
  return Math.round(randVal);
}

// ==============================================================================
// 5. Accessibility: Font Size, Theme, and Tooltips (Vanilla JS)
// ==============================================================================

const SIZE_KEYS = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
];
const FONT_CLASS_REGEX =
  /^font-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)-(400|500|600|700)$/;
const DEFAULT_SIZE_KEY = "md";
const DEFAULT_WEIGHT_KEY = "400";
const DEFAULT_FONT_CLASS = `font-${DEFAULT_SIZE_KEY}-${DEFAULT_WEIGHT_KEY}`;
const FONT_STORAGE_KEY = "fontSize";
const FORM_CONTROL_SELECTORS = [
  ".form-control",
  ".form-select",
  ".input-group-text",
  "input:not([type=checkbox]):not([type=radio])",
  "select",
  "textarea",
];

let activeSize = DEFAULT_SIZE_KEY;
let activeWeight = DEFAULT_WEIGHT_KEY;
let activeFontClass = DEFAULT_FONT_CLASS;
let fontControlsInitialized = false;
let fontAnchorObserver = null;
let pxToFontClassMap = null;
const dataSizeWeightState = new WeakMap();
const boundResizeFontButtons = new WeakSet();

function buildFontClass(size, weight) {
  return `font-${size}-${weight}`;
}

function parseFontClass(value) {
  if (!value) return null;
  const match = value.match(FONT_CLASS_REGEX);
  if (!match) return null;
  return {
    className: match[0],
    size: match[1],
    weight: match[2],
  };
}

function findFontClassOnNode(node) {
  if (!node || !node.classList) return null;
  for (const cls of Array.from(node.classList)) {
    const parsed = parseFontClass(cls);
    if (parsed) return parsed;
  }
  return null;
}

function clearFontClasses(node) {
  if (!node || !node.classList) return;
  Array.from(node.classList).forEach((cls) => {
    if (FONT_CLASS_REGEX.test(cls)) {
      node.classList.remove(cls);
    }
  });
}

function mapPxValueToClass(value) {
  if (!value || !document.body) return null;
  if (!pxToFontClassMap) {
    const map = new Map();
    const dummy = document.createElement("div");
    dummy.style.position = "absolute";
    dummy.style.visibility = "hidden";
    dummy.style.pointerEvents = "none";
    document.body.appendChild(dummy);

    SIZE_KEYS.forEach((size) => {
      dummy.className = "";
      dummy.classList.add(buildFontClass(size, DEFAULT_WEIGHT_KEY));
      const computed = getComputedStyle(dummy).fontSize;
      if (!computed) return;
      map.set(computed, buildFontClass(size, DEFAULT_WEIGHT_KEY));
      const numeric = parseFloat(computed);
      if (!Number.isNaN(numeric)) {
        map.set(numeric, buildFontClass(size, DEFAULT_WEIGHT_KEY));
      }
    });

    document.body.removeChild(dummy);
    pxToFontClassMap = map;
  }

  const normalized = value.trim();
  if (pxToFontClassMap.has(normalized)) return pxToFontClassMap.get(normalized);
  const numeric = parseFloat(normalized);
  if (!Number.isNaN(numeric) && pxToFontClassMap.has(numeric)) {
    return pxToFontClassMap.get(numeric);
  }
  return null;
}

function resolveStoredFontClass(defaultClass) {
  const stored = localStorage.getItem(FONT_STORAGE_KEY);
  if (!stored) return defaultClass;
  const parsed = parseFontClass(stored);
  if (parsed) return parsed.className;
  const mapped = mapPxValueToClass(stored);
  if (mapped) return mapped;
  return defaultClass;
}

function applyFontClass(className, { persist = true } = {}) {
  const parsed =
    parseFontClass(className) || parseFontClass(DEFAULT_FONT_CLASS);
  if (!parsed) return;

  const root = document.documentElement || document.body;
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

function isButtonLikeElement(element) {
  return !!(
    element &&
    element.matches &&
    element.matches("button, .btn, .moi-btn")
  );
}

function shiftFontSize(step) {
  const currentIndex = SIZE_KEYS.indexOf(activeSize);
  const baseIndex =
    currentIndex === -1 ? SIZE_KEYS.indexOf(DEFAULT_SIZE_KEY) : currentIndex;
  const nextIndex = Math.max(
    0,
    Math.min(SIZE_KEYS.length - 1, baseIndex + step),
  );
  const nextSize = SIZE_KEYS[nextIndex];
  applyFontClass(buildFontClass(nextSize, activeWeight));
}

function normalizeAnchorsFontClass(element = document) {
  element.querySelectorAll("a[href]").forEach((anchor) => {
    const existing = findFontClassOnNode(anchor);
    if (!existing) return;
    const targetClass = buildFontClass(activeSize, existing.weight);
    anchor.classList.remove(existing.className);
    anchor.classList.add(targetClass);
  });
}

function needsFormControlFallback(element) {
  if (!element || !element.matches) return false;
  if (element.style.fontSize) return true;
  const computed = parseFloat(getComputedStyle(element).fontSize);
  const rootFont = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  return Math.abs(computed - rootFont) > 0.1;
}

function normalizeFormControls(root = document) {
  const processed = new Set();
  let normalized = 0;
  FORM_CONTROL_SELECTORS.forEach((selector) => {
    root.querySelectorAll(selector).forEach((element) => {
      if (processed.has(element)) return;
      processed.add(element);
      const existing = findFontClassOnNode(element);
      if (existing) {
        const targetClass = buildFontClass(activeSize, existing.weight);
        if (existing.className !== targetClass) {
          clearFontClasses(element);
          element.classList.add(targetClass);
        }
        normalized += 1;
        return;
      }

      if (needsFormControlFallback(element)) {
        clearFontClasses(element);
        element.classList.add(
          buildFontClass(activeSize, activeWeight || DEFAULT_WEIGHT_KEY),
        );
        normalized += 1;
      }
    });
  });
  if (window.__FONT_DEBUG__ === true) {
    console.info(`[Font Debug] normalized ${normalized} form controls`);
  }
  return normalized;
}

function ensureDataSizeBaseline(element) {
  if (isButtonLikeElement(element)) return;

  const sizeValue = element.getAttribute("data-size");
  if (!SIZE_KEYS.includes(sizeValue)) return;

  const existing = findFontClassOnNode(element);
  if (existing) {
    dataSizeWeightState.set(element, existing.weight);
    return;
  }

  const fallbackWeight =
    dataSizeWeightState.get(element) || DEFAULT_WEIGHT_KEY;
  dataSizeWeightState.set(element, fallbackWeight);

  clearFontClasses(element);
  element.classList.add(buildFontClass(sizeValue, fallbackWeight));
}

function normalizeDataSizeElement(element) {
  if (isButtonLikeElement(element)) return;

  const sizeValue = element.getAttribute("data-size");
  if (!SIZE_KEYS.includes(sizeValue)) return;

  const existing = findFontClassOnNode(element);
  let weight = dataSizeWeightState.get(element);
  if (existing) {
    weight = existing.weight;
  }
  weight = weight || DEFAULT_WEIGHT_KEY;
  dataSizeWeightState.set(element, weight);

  clearFontClasses(element);
  element.classList.add(buildFontClass(activeSize, weight));
}

function normalizeDataSizeElements(root = document) {
  root.querySelectorAll("[data-size]").forEach(normalizeDataSizeElement);
}

function updateFontButtonStates() {
  const defaultIndex = SIZE_KEYS.indexOf(DEFAULT_SIZE_KEY);
  const currentIndex = SIZE_KEYS.indexOf(activeSize);

  document.querySelectorAll(".Resizefont .btn").forEach((btn) => {
    btn.classList.remove("active");
    const label = btn.textContent.trim();
    if (label === "-A" && currentIndex <= 0 && currentIndex !== -1) {
      btn.classList.add("active");
      return;
    }
    if (label === "A" && currentIndex === defaultIndex) {
      btn.classList.add("active");
      return;
    }
    if (
      (label === "+A" || label === "A++" || btn.classList.contains("btn-18")) &&
      currentIndex > defaultIndex
    ) {
      btn.classList.add("active");
    }
  });
}

function handleResizeFontButton(btn) {
  const label = btn.textContent.trim();
  if (btn.classList.contains("btn-18") || label === "+A" || label === "A++") {
    shiftFontSize(1);
    return;
  }
  if (
    label === "-A" ||
    btn.classList.contains("btn-10") ||
    btn.classList.contains("btn-10-p")
  ) {
    shiftFontSize(-1);
    return;
  }
  if (label === "A") {
    applyFontClass(DEFAULT_FONT_CLASS);
  }
}

function bindResizeFontButtons() {
  document.querySelectorAll(".Resizefont .btn").forEach((btn) => {
    if (boundResizeFontButtons.has(btn)) return;
    boundResizeFontButtons.add(btn);
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      handleResizeFontButton(btn);
    });
  });
}

function observeFontAnchors() {
  if (fontAnchorObserver) return;
  if (!document.body) return;
  fontAnchorObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
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
  const sampleAnchors = document.querySelectorAll("a[href]");
  console.group("[Font Debug] Self-test");
  console.info(`[Font Debug] root class: ${activeFontClass}`);
  console.info(`[Font Debug] anchors processed: ${sampleAnchors.length}`);
  const dataSizeElements = document.querySelectorAll("[data-size]");
  console.info(
    `[Font Debug] data-size elements normalized: ${dataSizeElements.length}`,
  );
  const normalizedFormControls = normalizeFormControls();
  console.info(
    `[Font Debug] form controls normalized: ${normalizedFormControls}`,
  );

  const initialSize = activeSize;
  const initialWeight = activeWeight;
  shiftFontSize(1);
  shiftFontSize(1);
  shiftFontSize(-1);

  const finalClass = activeFontClass;
  const storedClass = localStorage.getItem(FONT_STORAGE_KEY);
  console.assert(
    storedClass === finalClass,
    `[Font Debug] storage mismatch (${storedClass} vs ${finalClass})`,
  );

  const root = document.documentElement || document.body;
  const matchingClasses = Array.from(root.classList).filter((cls) =>
    FONT_CLASS_REGEX.test(cls),
  );
  console.assert(
    matchingClasses.length === 1,
    `[Font Debug] expected 1 root font class, found ${matchingClasses.length}`,
  );

  Array.from(sampleAnchors)
    .slice(0, 5)
    .forEach((anchor) => {
      const anchorClass = findFontClassOnNode(anchor);
      if (!anchorClass) return;
      console.assert(
        anchorClass.className === finalClass ||
          anchorClass.className.startsWith(`font-${activeSize}-`),
        "[Font Debug] anchor size mismatch",
      );
    });

  const dataSizeSample = document.querySelector('[data-size="lg"]');
  if (dataSizeSample) {
    const sampleFont = findFontClassOnNode(dataSizeSample);
    console.assert(
      sampleFont && sampleFont.size === activeSize,
      "[Font Debug] data-size sample did not follow global size",
    );
  }

  applyFontClass(buildFontClass(initialSize, initialWeight));
  console.groupEnd();
}

function initFontSizeControls() {
  if (!document.body) return;
  document.querySelectorAll("[data-size]").forEach(ensureDataSizeBaseline);
  const rootClass =
    findFontClassOnNode(document.documentElement) ||
    findFontClassOnNode(document.body) ||
    parseFontClass(DEFAULT_FONT_CLASS);
  const initialClass = resolveStoredFontClass(
    (rootClass && rootClass.className) || DEFAULT_FONT_CLASS,
  );
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

const applyThemeColor = (color) => {
  const id = "theme-color-overrides";
  let styleEl = document.getElementById(id);
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = id;
    document.head.appendChild(styleEl);
  }

  styleEl.textContent = `
:root { --color_change: ${color}; --theme-primary: ${color}; }
.Primary-500, .text-Primary-500, .green-100Color, .primaryprioroty,
.primaryprioroty-rounded, .primaryprioroty-filled {
    color: var(--theme-primary) !important;
    fill: var(--theme-primary) !important;
}
.bg-Primary-500, .green-100, .primaryprioroty, .primaryprioroty-filled,
.moi-btn--Primary, .moi-btn--Primary:hover, .moi-btn--Primary:focus,
.paginationContainer ul.pagination .page-link.active,
.paginationContainer ul.pagination .active > .page-link {
    background-color: var(--theme-primary) !important;
    border-color: var(--theme-primary) !important;
    color: #fff !important;
}
.border-Primary-500 { border-color: var(--theme-primary) !important; }
`;
};

const getDefaultThemeColor = () => {
  if (window.__defaultThemeColor) return window.__defaultThemeColor;
  const computed =
    getComputedStyle(document.documentElement)
      .getPropertyValue("--color_change")
      .trim() || "#25935f";
  window.__defaultThemeColor = computed;
  return window.__defaultThemeColor;
};

const bindThemeResetButtons = () => {
  const defaultColor = getDefaultThemeColor();
  document.querySelectorAll("[data-reset-theme-color]").forEach((btn) => {
    if (btn.dataset.resetBound === "true") return;
    btn.dataset.resetBound = "true";
    btn.addEventListener("click", () => {
      applyThemeColor(defaultColor);
      localStorage.removeItem("color");
      document.querySelectorAll(".colorpicker").forEach((input) => {
        input.value = defaultColor;
      });
    });
  });
};

const initThemePickers = () => {
  const defaultColor = getDefaultThemeColor();
  const savedColor = localStorage.getItem("color") || defaultColor;

  applyThemeColor(savedColor);

  const pickers = document.querySelectorAll(".colorpicker");

  if (!pickers.length && !window.__colorPickerObserver) {
    window.__colorPickerObserver = new MutationObserver(() => {
      if (document.querySelector(".colorpicker")) {
        initThemePickers();
        window.__colorPickerObserver.disconnect();
        window.__colorPickerObserver = null;
      }
    });
    window.__colorPickerObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
    return;
  }

  pickers.forEach((input) => {
    if (input.dataset.colorBound === "true") return;
    input.dataset.colorBound = "true";
    input.value = savedColor;
    input.addEventListener("input", (e) => {
      const newColor = e.target.value;
      applyThemeColor(newColor);
      localStorage.setItem("color", newColor);
    });
  });

  bindThemeResetButtons();
};

document.addEventListener("DOMContentLoaded", initThemePickers);
document.addEventListener("layout:loaded", initThemePickers);

const initTooltips = () => {
  if (typeof bootstrap === "undefined" || !bootstrap.Tooltip) return;
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
    if (el._tooltip) {
      el._tooltip.dispose();
      el._tooltip = null;
    }
    const trigger = el.getAttribute("data-bs-trigger") || "hover focus";
    const placement = el.getAttribute("data-bs-placement") || undefined;
    el._tooltip = new bootstrap.Tooltip(el, {
      trigger,
      placement,
      container: "body",
    });
  });
};

document.addEventListener("DOMContentLoaded", initTooltips);
document.addEventListener("layout:loaded", initTooltips);

// ==============================================================================
// 6. Sidebar Navigation (Vanilla JS)
// ==============================================================================

const body = document.querySelector("body");
const sidebar = body ? body.querySelector("nav") : null;
const toggle = body ? body.querySelector(".toggle") : null;
const arrows = document.querySelectorAll(".arrow");

if (toggle && sidebar) {
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
}

for (const arrow of arrows) {
  arrow.addEventListener("click", (e) => {
    const arrowParent = e.target.closest("li");
    if (arrowParent) {
      arrowParent.classList.toggle("showMenu");
    }
  });
}

const listItems = document.querySelectorAll("li");
for (const li of listItems) {
  li.addEventListener("click", (e) => {
    const arrow = li.querySelector(".arrow");
    if (arrow && !arrow.contains(e.target)) {
      li.classList.toggle("showMenu");
    } else if (!arrow) {
      // leave as-is
    }
  });
}

// ==============================================================================
// 7. File Download/Preview Controls
// ==============================================================================

function wireDownloadOpenControls(blobUrl, filename) {
  if (typeof $ === "undefined") {
    console.error("jQuery is required for wireDownloadOpenControls.");
    return;
  }

  $("#previewControls").show();
  $("#previewFileName").text(filename || "");

  const clientDownload = () => {
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = filename || "file";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const clientOpen = () => {
    window.open(blobUrl, "_blank", "noopener");
  };

  $("#downloadPreviewBtn")
    .off("click")
    .on("click", function () {
      const id = $("#previewFileId").val();
      const type = $("#previewFileType").val() || "";

      $.ajax({
        url:
          baseUrl +
          "/index?handler=DownloadFile&fileId=" +
          encodeURIComponent(id) +
          "&type=" +
          encodeURIComponent(type),
        method: "GET",
      })
        .done(clientDownload)
        .fail(function (xhr, status, error) {
          console.error(
            "Error in server log/fetch, falling back to client download:",
            error,
          );
          clientDownload();
        });
    });

  $("#openInNewTabBtn")
    .off("click")
    .on("click", function () {
      const id = $("#previewFileId").val();
      const type = $("#previewFileType").val() || "";

      $.ajax({
        url:
          baseUrl +
          "/index?handler=PrintFile&fileId=" +
          encodeURIComponent(id) +
          "&type=" +
          encodeURIComponent(type),
        method: "GET",
      })
        .done(clientOpen)
        .fail(function (xhr, status, error) {
          console.error(
            "Error in server log/fetch, falling back to client open:",
            error,
          );
          clientOpen();
        });
    });
}

const showLoader = () => {
  if (typeof $ !== "undefined") {
    $("#loaderDiv").css("display", "block");
  }
};

const hideLoader = () => {
  if (typeof $ !== "undefined") {
    $("#loaderDiv").css("display", "none");
  }
};

// ==============================================================================
// 8. File Upload Area Logic (Vanilla JS)
// ==============================================================================

const uploadArea = document.querySelector("#uploadArea");
const dropZoon = document.querySelector("#dropZoon");
const loadingText = document.querySelector("#loadingText");
const fileInput = document.querySelector("#fileInput");
const previewImage = document.querySelector("#previewImage");
const fileDetails = document.querySelector("#fileDetails");
const uploadedFile = document.querySelector("#uploadedFile");
const uploadedFileInfo = document.querySelector("#uploadedFileInfo");
const uploadedFileName = document.querySelector(".uploaded-file__name");
const uploadedFileIconText = document.querySelector(
  ".uploaded-file__icon-text",
);
const uploadedFileCounter = document.querySelector(".uploaded-file__counter");

const imagesTypes = ["jpeg", "png", "svg", "gif"];
const maxFileSize = 2 * 1024 * 1024;

if (dropZoon) {
  dropZoon.addEventListener("dragover", function (event) {
    event.preventDefault();
    dropZoon.classList.add("drop-zoon--over");
  });

  dropZoon.addEventListener("dragleave", function () {
    dropZoon.classList.remove("drop-zoon--over");
  });

  dropZoon.addEventListener("drop", function (event) {
    event.preventDefault();
    dropZoon.classList.remove("drop-zoon--over");
    const file = event.dataTransfer.files[0];
    if (file) {
      uploadFile(file);
    }
  });

  dropZoon.addEventListener("click", function () {
    if (fileInput) fileInput.click();
  });
}

if (fileInput) {
  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      uploadFile(file);
    }
  });
}

function uploadFile(file) {
  const fileReader = new FileReader();
  const fileType = file.type;
  const fileSize = file.size;

  if (fileValidate(fileType, fileSize)) {
    if (dropZoon) dropZoon.classList.add("drop-zoon--Uploaded");
    if (loadingText) loadingText.style.display = "block";
    if (previewImage) previewImage.style.display = "none";

    if (uploadedFile) uploadedFile.classList.remove("uploaded-file--open");
    if (uploadedFileInfo)
      uploadedFileInfo.classList.remove("uploaded-file__info--active");

    fileReader.addEventListener("load", function () {
      setTimeout(function () {
        if (uploadArea) uploadArea.classList.add("upload-area--open");
        if (loadingText) loadingText.style.display = "none";
        if (previewImage) {
          previewImage.style.display = "block";
          previewImage.setAttribute("src", fileReader.result);
        }

        if (fileDetails) fileDetails.classList.add("file-details--open");
        if (uploadedFile) uploadedFile.classList.add("uploaded-file--open");
        if (uploadedFileInfo)
          uploadedFileInfo.classList.add("uploaded-file__info--active");

        if (uploadedFileName) uploadedFileName.textContent = file.name;
        progressMove();
      }, 500);
    });
    fileReader.readAsDataURL(file);
  }
}

function progressMove() {
  let counter = 0;
  setTimeout(() => {
    let counterIncrease = setInterval(() => {
      if (counter >= 100) {
        clearInterval(counterIncrease);
      } else {
        counter = counter + 10;
        if (uploadedFileCounter)
          uploadedFileCounter.textContent = `${Math.min(counter, 100)}%`;
      }
    }, 100);
  }, 600);
}

function fileValidate(fileType, fileSize) {
  const isImageArray = imagesTypes.filter((type) => fileType.includes(type));

  if (isImageArray.length === 0) {
    alert(
      "Please make sure to upload an Image File Type (JPEG, PNG, SVG, GIF).",
    );
    return false;
  }

  if (uploadedFileIconText) {
    const fileExt = isImageArray[0].toLowerCase();
    uploadedFileIconText.textContent = fileExt === "jpeg" ? "jpg" : fileExt;
  }

  if (fileSize > maxFileSize) {
    alert("Please Your File Should be 2 Megabytes or Less.");
    return false;
  }

  return true;
}

// ==============================================================================
// 9. Utility Validation Functions
// ==============================================================================

function isNumberNotEmpty(value) {
  return (
    value !== null &&
    value !== undefined &&
    value !== "" &&
    !isNaN(Number(value))
  );
}

function isObjectNotEmpty(obj) {
  if (obj === null || obj === undefined) {
    return false;
  }
  return typeof obj === "object" && Object.keys(obj).length > 0;
}

function isBase64Image(base64String) {
  const imageSignatures = {
    jpeg: ["ffd8ffe0", "ffd8ffe1", "ffd8ffe2", "ffd8ffe3", "ffd8ffe8"],
    png: ["89504e47"],
    gif: ["47494638"],
    bmp: ["424d"],
    webp: ["52494646"],
  };

  try {
    const decodedData = atob(base64String);
    let hexString = "";
    for (let i = 0; i < Math.min(decodedData.length, 4); i++) {
      let hex = decodedData.charCodeAt(i).toString(16);
      hex = hex.length === 1 ? "0" + hex : hex;
      hexString += hex;
    }

    for (const format in imageSignatures) {
      if (!Object.prototype.hasOwnProperty.call(imageSignatures, format))
        continue;
      for (const signature of imageSignatures[format]) {
        if (hexString.startsWith(signature)) {
          return { isImage: true, format: format };
        }
      }
    }
  } catch (e) {
    console.error("Error decoding base64 string:", e);
    return { isImage: false, format: null };
  }
  return { isImage: false, format: null };
}
