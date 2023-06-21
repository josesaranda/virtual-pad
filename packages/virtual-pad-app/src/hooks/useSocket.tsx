import { useEffect, useRef, useState } from "react";

export function useSocket() {
  const [isConnected, setIsConnected] = useState(false);
  const socketRef: any = useRef(null);

  useEffect(() => {
    if (typeof io === "function") {
      socketRef.current = io();

      socketRef.current.on("connect_error", (error: any) => {
        console.log(error);
        setIsConnected(false);
      });

      socketRef.current.on("connect", () => {
        console.log("connected");
        setIsConnected(true);
      });

      socketRef.current.on("disconnect", () => {
        console.log("disconnected");
        setIsConnected(false);
      });
    }
  }, []);

  const emitClick = (keyPressed: string, type: "down" | "up") => {
    console.log("emit click", keyPressed, type);
    socketRef.current.emit("key", [keyPressed, type]);
  };

  return { isConnected, emitClick };
}
