import React from "https://esm.sh/react@18";

import { BackgroundImage } from "./components/BackgroundImage.js";
import { CenteredLayout } from "./components/CenteredLayout.js";
import { Headline } from "./components/Headline.js";
import { Subheadline } from "./components/Subheadline.js";
import { ActionLink } from "./components/ActionLink.js";

export function App() {
  const headline = "You have been phished.";
  const courseHref = "https://bigbasket.centumlearnpro.in/#!/module/2675";

  return (
    React.createElement(
      "div",
      { className: "app" },
      React.createElement(BackgroundImage),
      React.createElement(
        CenteredLayout,
        null,
        React.createElement(Headline, { children: headline }),
        React.createElement(Subheadline, {
          children: "Now as part of compliance, please access the course below.",
        }),
        React.createElement(
          "div",
          { className: "actions" },
          React.createElement(ActionLink, {
            href: courseHref,
            children: "Click here to access the course of learning",
          })
        ),
        React.createElement(
          "div",
          { className: "finePrint" },
          "If you believe this is an error, contact your IT/security team."
        )
      )
    )
  );
}
