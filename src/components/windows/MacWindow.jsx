import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";
const MacWindow = ({
  children,
  width = "40vw",
  height = "50vh",
  windowName,
  setWindowState,
}) => {
  return (
    <div>
      <Rnd
        default={{
          width: width,
          height: height,
          x: 300,
          y: 100,
        }}
      >
        <div className="window">
          <div className="nav">
            <div className="dots">
              <div
                className="dot red"
                onClick={() =>
                  setWindowState((state) => ({
                    ...state,
                    [windowName]: false,
                  }))
                }
              ></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>

            <div className="title">
              <p>anshkotnala ~ zsh</p>
            </div>
          </div>
          <div className="main-content">{children}</div>
        </div>
      </Rnd>
    </div>
  );
};

export default MacWindow;
