import { useEffect, useMemo, useState } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

// Whether the OS is asking for less movement. Read at render rather than in
// an effect, so the finished text can be the very first thing painted.
function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia(REDUCED_MOTION_QUERY).matches
  );
}

/**
 * Reveals an array of lines one character at a time, as if typed.
 *
 * Progress is tracked as a single count across every line rather than per
 * line, so the pause at a line break is just a longer gap between two
 * characters instead of a second piece of state to keep in sync.
 *
 * Returns the visible text for each line, which line is still being typed,
 * and whether the whole thing has finished.
 *
 * Under `prefers-reduced-motion` the lines start complete and no timers run.
 */
function useTypewriter(
  lines,
  { charDelay = 80, linePause = 300, startDelay = 250 } = {},
) {
  const totalCharacters = useMemo(
    () => lines.reduce((total, line) => total + line.length, 0),
    [lines],
  );

  // The character index at which each line after the first begins. Used to
  // hold slightly longer before starting a new line.
  const lineStartOffsets = useMemo(() => {
    const offsets = [];
    let runningTotal = 0;

    lines.forEach((line, index) => {
      if (index > 0) offsets.push(runningTotal);
      runningTotal += line.length;
    });

    return offsets;
  }, [lines]);

  const [typedCount, setTypedCount] = useState(() =>
    prefersReducedMotion() ? totalCharacters : 0,
  );

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    let timeoutId;
    let count = 0;

    function typeNextCharacter() {
      count += 1;
      setTypedCount(count);

      if (count >= totalCharacters) return;

      const isAtLineBreak = lineStartOffsets.includes(count);
      timeoutId = setTimeout(
        typeNextCharacter,
        isAtLineBreak ? linePause : charDelay,
      );
    }

    timeoutId = setTimeout(typeNextCharacter, startDelay);

    return () => clearTimeout(timeoutId);
  }, [totalCharacters, lineStartOffsets, charDelay, linePause, startDelay]);

  // Slice the running count back out into one string per line, working from
  // how many characters precede each line rather than a running total — a
  // counter mutated inside the map would be reassigned after render.
  const typedLines = lines.map((line, index) => {
    const charactersBefore = lines
      .slice(0, index)
      .reduce((total, earlierLine) => total + earlierLine.length, 0);

    const visibleCharacters = Math.min(
      line.length,
      Math.max(0, typedCount - charactersBefore),
    );

    return line.slice(0, visibleCharacters);
  });

  const isDone = typedCount >= totalCharacters;

  // The cursor sits on the line currently being typed, and stays on the last
  // line once everything is out.
  const activeLine = isDone
    ? lines.length - 1
    : typedLines.findIndex(
        (typed, index) => typed.length < lines[index].length,
      );

  return { typedLines, activeLine, isDone };
}

export default useTypewriter;
