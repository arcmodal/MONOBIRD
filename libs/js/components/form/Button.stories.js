import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";
import { GlobalStyle } from "../core/index.js";

storiesOf("Button", module).add("text test", () => (
  <>
    <GlobalStyle />
    <Button />
  </>
));
