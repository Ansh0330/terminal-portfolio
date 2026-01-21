import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";

const Resume = ({
  windowName,
  windowState,
  setWindowState,
  minimized,
  layout,
  onLayoutChange,
  zIndex,
  onFocus,
}) => {
  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      setWindowState={setWindowState}
      minimized={minimized}
      layout={layout}
      onLayoutChange={onLayoutChange}
      zIndex={zIndex}
      onFocus={onFocus}
    >
      <div className="resume-window">
        <embed src="/resume.pdf" frameborder="0"></embed>
      </div>
    </MacWindow>
  );
};

export default Resume;
