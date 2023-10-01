import { render, screen } from "@testing-library/react";
import Home, { blurb, name } from "./page";

jest.mock("@/components/SocialLink");

test("Displays name", () => {
  render(<Home />);

  expect(screen.getByRole("heading", { name: name }));
});

test("Displays blurb", () => {
  render(<Home />);

  expect(screen.getByText(blurb));
});

test("Displays headshot", () => {
  render(<Home />);

  expect(screen.getByRole("img", { name: "Sarah headshot" }));
});
