import { FiArrowDown, FiDownload } from "react-icons/fi";
import { positioning, roleOrder, roles } from "../data/profile.jsx";
import useTypewriter from "../hooks/useTypewriter.js";
import Button from "./Button.jsx";

import "../styles/heroSection.css";

// Split across two lines so the surname can take the accent and the name
// reads as a wordmark rather than a sentence.
const NAME_LINES = ["Tashif", "Khan"];

/**
 * Hero: the name at display size, one line of positioning, and the two
 * controls that matter — the role switcher and the resume download.
 *
 * The role lives in App so this switcher also drives the About section; the
 * long-form summary was moved out of the hero so the first screen stays a
 * statement rather than a paragraph.
 */
function Header({ selectedRole, onRoleChange }) {
  const currentRole = roles[selectedRole];
  const { typedLines, activeLine, isDone } = useTypewriter(NAME_LINES);

  return (
    <header className="hero" id="home">
      <div className="container">
        <p className="hero-eyebrow">{positioning}</p>

        {/* The name is announced in full from the first render — the typing is
            decoration, so the partial text is hidden from assistive tech and
            the whole name is read from the label instead. */}
        <h1 className="hero-title" aria-label={NAME_LINES.join(" ")}>
          {typedLines.map((typed, index) => (
            <span
              key={NAME_LINES[index]}
              aria-hidden="true"
              className={`hero-title-line ${
                index === 1 ? "hero-title-accent" : ""
              }`}
            >
              {typed}
              {index === activeLine && (
                <span
                  className={`hero-caret ${isDone ? "is-blinking" : ""}`}
                ></span>
              )}
            </span>
          ))}
        </h1>

        <p className="hero-claim" aria-live="polite">
          {currentRole.claim}
        </p>

        <div className="hero-controls">
          <div className="role-switch" role="group" aria-label="Select a role">
            {roleOrder.map((roleId) => (
              <Button
                key={roleId}
                variant={selectedRole === roleId ? "primary" : "secondary"}
                onClick={() => onRoleChange(roleId)}
                aria-pressed={selectedRole === roleId}
              >
                {roles[roleId].label}
              </Button>
            ))}
          </div>

          {/* Roles without a resume on file show no button at all, rather
              than a download that hands over the wrong document. */}
          {currentRole.resume && (
            <a
              href={currentRole.resume.file}
              download={currentRole.resume.downloadName}
              className="resume-download-button"
            >
              <FiDownload className="resume-download-icon" aria-hidden="true" />
              Download {currentRole.resume.label}
            </a>
          )}
        </div>

        {/* A quiet pointer to the work, which is the next thing on the page. */}
        <a className="hero-scroll-cue" href="#projects">
          <FiArrowDown aria-hidden="true" />
          <span>See the work</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
