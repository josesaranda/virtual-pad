import { useVersion } from "@virtual-pad-app/hooks/useVersion";
import React, { useEffect, useState } from "react";
import "../styles/main.scss";
import { OverlayMessage } from "./OverlayMessage/OverlayMessage";
import { Pad1 } from "./Pad1";
import { Pad2 } from "./Pad2";
import { Pad3 } from "./Pad3";
import { StatusBar } from "./StatusBar/StatusBar";

export const App: React.FC<any> = () => {
  const [pad, setPad] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const version = useVersion();
  let socket: any;

  useEffect(() => {
    if (typeof io === "function") {
      socket = io();

      socket.on("connect_error", (error: any) => {
        console.log(error);
        setIsConnected(false);
      });

      socket.on("connect", () => {
        console.log("connected");
        setIsConnected(true);
      });

      socket.on("disconnect", () => {
        console.log("disconnected");
        setIsConnected(false);
      });
    }

    document.addEventListener(
      "touchmove",
      (event: any) => {
        if (event.scale !== 1) {
          event.preventDefault();
        }
      },
      { passive: false }
    );
  }, []);

  const emitClick = (keyPressed: string, type: "down" | "up") => {
    socket.emit("key", [keyPressed, type]);
  };

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
