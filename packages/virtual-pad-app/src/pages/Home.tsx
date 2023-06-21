import React, { useEffect, useState } from "react";
import { OverlayMessage } from "../components/OverlayMessage/OverlayMessage";
import { Pad1 } from "../components/Pad1";
import { Pad2 } from "../components/Pad2";
import { Pad3 } from "../components/Pad3";
import { StatusBar } from "../components/StatusBar/StatusBar";
import { useSocket } from "../hooks/useSocket";
import { useVersion } from "../hooks/useVersion";
import "./Home.scss";

export const Home: React.FC<any> = () => {
  const [pad, setPad] = useState(0);
  const { isConnected, emitClick } = useSocket();
  const version = useVersion();

  useEffect(() => {
    document.addEventListener(
      "touchmove",
      (event: any) => {
        if (event.scale !== 1) {
          event.preventDefault();
        }
      },
      { passive: false }
    );
  });

  return (
    <main>
      <OverlayMessage></OverlayMessage>
      <StatusBar isConnected={isConnected} version={version}></StatusBar>
      <div className="pad-container">
        <div className="pad-header-container">Virtual Pad</div>
        <div className="pad-layouts-container">
          <button className="button-small square" onClick={() => setPad(0)}>
            Pad 1
          </button>
          <button className="button-small square" onClick={() => setPad(1)}>
            Pad 2
          </button>
          <button className="button-small square" onClick={() => setPad(2)}>
            Pad 3
          </button>
        </div>
        {pad === 0 && (
          <Pad3
            onPadKey={(keyPressed, type) => {
              emitClick(keyPressed, type);
            }}
          ></Pad3>
        )}
        {pad === 1 && (
          <Pad1
            onPadKey={(keyPressed, type) => {
              emitClick(keyPressed, type);
            }}
          ></Pad1>
        )}
        {pad === 2 && (
          <Pad2
            onPadKey={(keyPressed, type) => {
              emitClick(keyPressed, type);
            }}
          ></Pad2>
        )}
      </div>
    </main>
  );
};
