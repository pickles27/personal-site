import githubLogo from "public/github-mark.png";
import linkedinLogo from "public/linkedin-logo.png";
import mailLogo from "public/mail.svg";

export enum Social {
  Github = "Github",
  LinkedIn = "LinkedIn",
  Email = "Email",
}

export const getLinkDataBySocial = (social: Social) => {
  switch (social) {
    case Social.Github:
      return {
        href: "https://www.github.com/pickles27",
        logo: {
          alt: "github logo",
          height: 16,
          src: githubLogo,
          width: 16,
        },
        label: "github.com/pickles27",
      };
    case Social.LinkedIn:
      return {
        href: "https://www.linkedin.com/in/sarah-pickrahn",
        logo: {
          alt: "linkedin logo",
          height: 16,
          src: linkedinLogo,
          width: 19,
        },
        label: "linkedin.com/in/sarah-pickrahn",
      };
    case Social.Email:
      return {
        href: "mailto:sarah.pickrahn@gmail.com",
        logo: {
          alt: "email Sarah",
          height: 16,
          src: mailLogo,
          width: 16,
        },
        label: "Email me",
      };
  }
};
