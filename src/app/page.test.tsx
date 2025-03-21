import { render, screen } from "@testing-library/react";
import Home from "./page";

test("Displays name", () => {
  render(<Home />);

  expect(screen.getByRole("heading", { name: "Sarah Pickrahn" }));
});

test("Displays blurb", () => {
  render(<Home />);

  expect(
    screen.getByText(
      "Hi, I'm Sarah. I'm a software engineer living in Hayward, CA with my partner and 2 cats. When I'm not working, I love powerlifting, dance, rock climbing, and playing video games!"
    )
  );
});

test("Displays headshot", () => {
  render(<Home />);

  expect(screen.getByRole("img", { name: "Sarah headshot" }));
});

test("Displays social links", () => {
  render(<Home />);

  expect(screen.getByRole("link", { name: "Github" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "LinkedIn" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Email" })).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Show me your cat!" })
  ).toBeInTheDocument();
});
