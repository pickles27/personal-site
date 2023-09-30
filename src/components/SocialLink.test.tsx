import { render, screen } from "@testing-library/react";
import { SocialLink } from "./SocialLink";
import { getLinkDataBySocial, Social } from "../utils/getLinkDataBySocial";

test.each([[Social.Github], [Social.LinkedIn], [Social.Email]])(
  "Displays the logo for %s",
  (social: Social) => {
    const {
      logo: { alt },
    } = getLinkDataBySocial(social);

    render(<SocialLink social={social} />);

    expect(screen.getByRole("img", { name: alt })).toBeInTheDocument();
  }
);

test.each([[Social.Github], [Social.LinkedIn], [Social.Email]])(
  "Displays the link for %s",
  (social: Social) => {
    const { label } = getLinkDataBySocial(social);

    render(<SocialLink social={social} />);

    expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
  }
);

test("The link has the expected attributes", () => {
  const social = Social.Github;
  const { label } = getLinkDataBySocial(social);

  render(<SocialLink social={social} />);

  expect(screen.getByRole("link", { name: label })).toHaveAttribute(
    "rel",
    "noopener noreferrer"
  );
  expect(screen.getByRole("link", { name: label })).toHaveAttribute(
    "target",
    "_blank"
  );
});
