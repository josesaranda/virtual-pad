import type { Pad } from "@virtual-pad-app/models/Pad";
import React from "react";

export const Pad2: React.FC<Pad> = ({ onPadKey }: Pad) => {
  return (
    <>
      <div className="pad-left-container">
        <button
          className="button left"
          onPointerDown={() => onPadKey("a", "down")}
          onPointerUp={() => onPadKey("a", "up")}
          onPointerCancel={() => onPadKey("a", "up")}
        >
          A
        </button>
        <button
          className="button top"
          onPointerDown={() => onPadKey("w", "down")}
          onPointerUp={() => onPadKey("w", "up")}
          onPointerCancel={() => onPadKey("w", "up")}
        >
          W
        </button>
        <button
          className="button right"
          onPointerDown={() => onPadKey("d", "down")}
          onPointerUp={() => onPadKey("d", "up")}
          onPointerCancel={() => onPadKey("d", "up")}
        >
          D
        </button>
        <button
          className="button bottom"
          onPointerDown={() => onPadKey("s", "down")}
          onPointerUp={() => onPadKey("s", "up")}
          onPointerCancel={() => onPadKey("s", "up")}
        >
          S
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
