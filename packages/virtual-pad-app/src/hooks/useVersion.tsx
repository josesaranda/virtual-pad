import { useEffect, useState } from "react";

export function useVersion() {
  const [version, setVersion] = useState("");

  useEffect(() => {
    fetch("/api/version")
      .then((res) => res.json())
      .then((value) => {
        setVersion(value.version);
      })
      .catch((error) => {});
  }, []);
  return version;
}
