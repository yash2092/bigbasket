import React from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

import { App } from "./App.js";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Missing #root element");
}

createRoot(rootEl).render(
  React.createElement(React.StrictMode, null, React.createElement(App))
);
