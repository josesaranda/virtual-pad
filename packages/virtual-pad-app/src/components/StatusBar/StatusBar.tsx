import React from "react";
import "./StatusBar.scss";

type StatusBarProps = {
  isConnected: boolean;
  version: string;
};

export const StatusBar: React.FC<StatusBarProps> = ({
  isConnected,
  version,
}: StatusBarProps) => {
  const statusText = isConnected ? "Connected" : "Disconnected";
  const githubRepoUrl = "https://github.com/josesaranda/virtual-pad/commit/";
  const href = githubRepoUrl + version;
  return (
    <div className="StatusBar">
      <a className="version" target="_blank" href={href}>
        Version: {version}
      </a>
      <span className="status">
        <span className={isConnected ? "connected" : "disconnected"}></span>
        {statusText}
      </span>
    </div>
  );
};
