import React from "react";
import "./dock.scss";
import Spotify from "./windows/Spotify";

const Dock = ({ windowState, setWindowState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, github: true }));
        }}
        className="icon github"
      >
        <img src="doc-icons/github.svg" alt="" />
      </div>
      <div
        className="icon note"
        onClick={() => {
          setWindowState((state) => ({ ...state, note: true }));
        }}
      >
        <img src="/doc-icons/note.svg" alt="" />
      </div>
      <div
        className="icon pdf"
        onClick={() => {
          setWindowState((state) => ({ ...state, resume: true }));
        }}
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
        <img src="/doc-icons/calender.svg" alt="" />
      </div>
      <div
        className="icon spotify"
        onClick={() => {
          setWindowState((state) => ({ ...state, spotify: true }));
        }}
      >
        <img src="/doc-icons/spotify.svg" alt="" />
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
        <img src="/doc-icons/link.svg" alt="" />
      </div>
      <div
        className="icon cli"
        onClick={() => {
          setWindowState((state) => ({ ...state, cli: true }));
        }}
      >
        <img src="/doc-icons/cli.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
