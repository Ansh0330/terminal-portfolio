import React from "react";
import "./dock.scss";

const Dock = ({ windowState, setWindowState }) => {
  const toggleWindow = (key) => {
    setWindowState((prev) => {
      const current = prev[key] || { open: false, minimized: false };

      // If closed, open it. If minimized, restore it. If open, minimize it.
      if (!current.open) {
        return { ...prev, [key]: { open: true, minimized: false } };
      }

      if (current.minimized) {
        return { ...prev, [key]: { ...current, minimized: false } };
      }

      return { ...prev, [key]: { ...current, minimized: true } };
    });
  };
  return (
    <footer className="dock">
      <div
        onClick={() => toggleWindow("github")}
        className={`icon github ${windowState.github?.minimized ? "minimized" : ""}`}
      >
        <img src="doc-icons/github.png" alt="" />
      </div>
      <div
        onClick={() => toggleWindow("note")}
        className={`icon notes ${windowState.note?.minimized ? "minimized" : ""}`}
      >
        <img src="/doc-icons/notes.svg" alt="" />
      </div>
      <div
        onClick={() => toggleWindow("resume")}
        className={`icon pdf ${windowState.resume?.minimized ? "minimized" : ""}`}
      >
        <img src="/doc-icons/pdf.svg" alt="" />
      </div>
      <div
        className="icon calender"
        onClick={() => {
          window.open(
            "https://calendar.google.com/calendar/u/0/r?pli=1",
            "_blank",
          );
        }}
      >
        <img src="/doc-icons/calendar.webp" alt="" />
      </div>
      <div
        onClick={() => toggleWindow("spotify")}
        className={`icon spotify ${windowState.spotify?.minimized ? "minimized" : ""}`}
      >
        <img src="/doc-icons/spotify.png" alt="" />
      </div>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=meanshbhardwaj@gmail.com&su=Portfolio%20Contact"
        target="_blank"
        rel="noopener noreferrer"
        className="icon mail"
      >
        <img src="/doc-icons/mail.svg" alt="Email" />
      </a>

      <div
        className="icon link"
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/ansh-kotnala3003/ ",
            "_blank",
          );
        }}
      >
        <img src="/doc-icons/linkedin.png" alt="" />
      </div>
      <div
        onClick={() => toggleWindow("cli")}
        className={`icon terminal ${windowState.cli?.minimized ? "minimized" : ""}`}
      >
        <img src="/doc-icons/terminal.png" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
