import { StaticImageData } from "next/image";
import githubLogo from "public/github-mark.png";
import linkedinLogo from "public/linkedin-logo.png";
import mailLogo from "public/mail.svg";

export enum Social {
  Github = "Github",
  LinkedIn = "LinkedIn",
  Email = "Email",
}

interface SocialAttributes {
  href: string;
  logo: {
    alt: string;
    height: number;
    src: StaticImageData;
    width: number;
  };
  label: string;
}

export const socialData: Record<Social, SocialAttributes> = {
  [Social.Github]: {
    href: "https://www.github.com/pickles27",
    logo: {
      alt: "github logo",
      height: 16,
      src: githubLogo,
      width: 16,
    },
    label: "github.com/pickles27",
  },
  [Social.LinkedIn]: {
    href: "https://www.linkedin.com/in/sarah-pickrahn",
    logo: {
      alt: "linkedin logo",
      height: 16,
      src: linkedinLogo,
      width: 19,
    },
    label: "linkedin.com/in/sarah-pickrahn",
  },
  [Social.Email]: {
    href: "mailto:sarah.pickrahn@gmail.com",
    logo: {
      alt: "email Sarah",
      height: 16,
      src: mailLogo,
      width: 16,
    },
    label: "Email me",
  },
};
