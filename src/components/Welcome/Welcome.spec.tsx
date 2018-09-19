import { mount } from "enzyme";
import * as React from "react";
import { Welcome } from "./Welcome";

describe("Welcome", () => {
  it("should welcome properly", () => {
    const name = "something!";
    const component = mount(<Welcome name={name} />);

    expect(component.find("h1").text()).toBe(`Welcome, ${name}`);
  });
});
