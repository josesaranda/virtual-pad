import type { Pad } from "@virtual-pad-app/models/Pad";
import React from "react";

export const Pad1: React.FC<Pad> = ({ onPadKey }: Pad) => {
  return (
    <>
      <div className="pad-left-container">
        <button
          className="button left"
          onPointerDown={() => onPadKey("left", "down")}
          onPointerUp={() => onPadKey("left", "up")}
          onPointerCancel={() => onPadKey("left", "up")}
        >
          LEFT
        </button>
        <button
          className="button top"
          onPointerDown={() => onPadKey("up", "down")}
          onPointerUp={() => onPadKey("up", "up")}
          onPointerCancel={() => onPadKey("up", "up")}
        >
          UP
        </button>
        <button
          className="button right"
          onPointerDown={() => onPadKey("right", "down")}
          onPointerUp={() => onPadKey("right", "up")}
          onPointerCancel={() => onPadKey("right", "up")}
        >
          RIGHT
        </button>
        <button
          className="button bottom"
          onPointerDown={() => onPadKey("down", "down")}
          onPointerUp={() => onPadKey("down", "up")}
          onPointerCancel={() => onPadKey("down", "up")}
        >
          DOWN
        </button>
      </div>
      <div className="pad-right-container">
        <button
          className="button left"
          onPointerDown={() => onPadKey("tab", "down")}
          onPointerUp={() => onPadKey("tab", "up")}
          onPointerCancel={() => onPadKey("tab", "up")}
        >
          TAB
        </button>
        <button
          className="button top"
          onPointerDown={() => onPadKey("f", "down")}
          onPointerUp={() => onPadKey("f", "up")}
          onPointerCancel={() => onPadKey("f", "up")}
        >
          F
        </button>
        <button
          className="button right"
          onPointerDown={() => onPadKey("space", "down")}
          onPointerUp={() => onPadKey("space", "up")}
          onPointerCancel={() => onPadKey("space", "up")}
        >
          SPACE
        </button>
        <button
          className="button bottom"
          onPointerDown={() => onPadKey("e", "down")}
          onPointerUp={() => onPadKey("e", "up")}
          onPointerCancel={() => onPadKey("e", "up")}
        >
          E
        </button>
      </div>
    </>
  );
};
