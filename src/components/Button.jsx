/**
 * Shared button. Renders an anchor when `to` is provided, otherwise a <button>.
 *
 * Props:
 * - children: button text
 * - to: optional link (renders <a>)
 * - variant: "primary" | "secondary"
 * - disabled: disables the button
 * - onClick: click handler (for non-link buttons)
 * - newTab: open links in a new tab (default true)
 * - rest: any other props (aria-*, type, ...) are forwarded to the element
 */
function Button({
  children,
  to,
  variant = "primary",
  disabled = false,
  onClick,
  newTab = true,
  ...rest
}) {
  const classes = ["btn", `btn-${variant}`, disabled && "btn-disabled"]
    .filter(Boolean)
    .join(" ");

  if (to && !disabled) {
    return (
      <a
        href={to}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
