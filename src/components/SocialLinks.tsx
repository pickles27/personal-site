import { FaGithub, FaLinkedin, FaEnvelope, FaCat } from "react-icons/fa6";

export const socialLinks = [
  {
    href: "https://www.github.com/pickles27",
    logo: <FaGithub />,
    label: "Github",
  },
  {
    href: "https://www.linkedin.com/in/sarah-pickrahn",
    logo: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "mailto:sarah.pickrahn@gmail.com",
    logo: <FaEnvelope />,
    label: "Email",
  },
  {
    href: "https://onlycats.gg",
    logo: <FaCat />,
    label: "Show me your cat!",
  },
];

export const SocialLinks = () => (
  <ul className="flex flex-col gap-2">
    {socialLinks.map(({ href, label, logo }) => (
      <li key={label} className="flex items-center gap-2">
        {logo}
        <a
          className="text-blue-900"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      </li>
    ))}
  </ul>
);
