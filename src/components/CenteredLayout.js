import React from "https://esm.sh/react@18";

export function CenteredLayout({ children }) {
  return React.createElement(
    "main",
    { className: "centeredLayout" },
    React.createElement("div", { className: "content" }, children)
  );
}
