import React from "react";
/**
 * Button Component
 *
 * Props:
 * - children: button text
 * - to: optional link (renders <a>)
 * - variant: "primary" | "secondary"
 * - disabled: disables button
 * - onClick: click handler (for non-link buttons)
 */
function Button({
  children,
  to,
  variant = "primary",
  disabled = false,
  onClick
}) {
  const classes = `btn btn-${variant} ${disabled ? "btn-disabled" : ""}`;

  // If link provided → render anchor
  if (to && !disabled) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        <span className="btn-overlay"></span>
        <span className="btn-text">{children}</span>
      </a>
    );
  }

  // Otherwise → regular button
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="btn-overlay"></span>
      <span className="btn-text">{children}</span>
    </button>
  );
}

export default Button;