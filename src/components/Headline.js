import React from "https://esm.sh/react@18";

export function Headline({ children }) {
  return React.createElement("h1", { className: "headline" }, children);
}
