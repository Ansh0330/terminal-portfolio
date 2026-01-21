import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MacWindow from "./MacWindow";
import "./notes.scss";

const Note = ({
  windowName,
  windowState,
  setWindowState,
  minimized,
  layout,
  onLayoutChange,
  zIndex,
  onFocus,
}) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

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
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;
