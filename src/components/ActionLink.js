import React from "https://esm.sh/react@18";

export function ActionLink({ href, children }) {
  return React.createElement(
    "a",
    {
      className: "actionLink",
      href,
      rel: "noopener noreferrer",
    },
    children
  );
}
