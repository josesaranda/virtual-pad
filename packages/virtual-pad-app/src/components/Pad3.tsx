import React from "react";
import type { Pad } from "../models/Pad";

export const Pad3: React.FC<Pad> = ({ onPadKey }: Pad) => {
  return (
    <>
      <div className="pad-left-container">
        <button
          style={{ width: "75px", height: "75px" }}
          className="button left"
          onPointerDown={() => onPadKey("left", "down")}
          onPointerUp={() => onPadKey("left", "up")}
          onPointerCancel={() => onPadKey("left", "up")}
        >
          LEFT
        </button>
        <button
          style={{ width: "75px", height: "75px" }}
          className="button right"
          onPointerDown={() => onPadKey("right", "down")}
          onPointerUp={() => onPadKey("right", "up")}
          onPointerCancel={() => onPadKey("right", "up")}
        >
          RIGHT
        </button>
      </div>
      <div className="pad-right-container">
        <button
          style={{ width: "160px", height: "160px" }}
          className="button right"
          onPointerDown={() => onPadKey("space", "down")}
          onPointerUp={() => onPadKey("space", "up")}
          onPointerCancel={() => onPadKey("space", "up")}
        >
          SPACE
        </button>
      </div>
    </>
  );
};
