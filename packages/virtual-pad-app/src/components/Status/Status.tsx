import React from "react";
import "./Status.scss";

type StatusProps = {
  isConnected: boolean;
};

export const Status: React.FC<StatusProps> = ({ isConnected }: StatusProps) => {
  const text = isConnected ? "Connected" : "Disconnected";
  const className = `Status ${isConnected ? "connected" : "disconnected"}`;
  return <div className={className}>{text}</div>;
};
