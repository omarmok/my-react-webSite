const SunIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <circle cx="10" cy="10" r="3.25" fill="currentColor" />
    <path
      d="M10 1.75v2.1M10 16.15v2.1M18.25 10h-2.1M3.85 10h-2.1M15.83 4.17l-1.49 1.49M5.66 14.34l-1.49 1.49M15.83 15.83l-1.49-1.49M5.66 5.66 4.17 4.17"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <path
      d="M13.95 2.2a7.7 7.7 0 1 0 3.85 13.88A8.55 8.55 0 1 1 13.95 2.2Z"
      fill="currentColor"
    />
  </svg>
);

const ThemeToggle = ({
  theme = "light",
  onToggle = () => {},
  ariaLabel = "",
  orientation = "horizontal",
}) => {
  const isDark = theme === "dark";
  const isVertical = orientation === "vertical";

  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? "theme-toggle--dark" : "theme-toggle--light"} ${isVertical ? "theme-toggle--vertical" : ""}`}
      role="switch"
      aria-checked={isDark}
      aria-label={ariaLabel}
      onClick={onToggle}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__icon theme-toggle__icon--sun">
          <SunIcon />
        </span>
        <span className="theme-toggle__icon theme-toggle__icon--moon">
          <MoonIcon />
        </span>
        <span className="theme-toggle__thumb">
          <span className="theme-toggle__thumb-icon">
            {isDark ? <MoonIcon /> : <SunIcon />}
          </span>
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;
