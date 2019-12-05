import React from "react";
import { render } from "@testing-library/react";
import { Header } from "./index.js";

describe("Dirty Little Header Test", () => {
  it("Renders Header", () => {
    const { asFragment } = render(<Header title="Monobird" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
