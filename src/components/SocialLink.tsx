import Image from "next/image";
import { Social, getLinkDataBySocial } from "../utils/getLinkDataBySocial";

export interface SocialLinkProps {
  social: Social;
}

export const SocialLink = ({ social }: SocialLinkProps) => {
  const { href, label, logo } = getLinkDataBySocial(social);

  return (
    <div className="flex items-center gap-1">
      <div className="w-5 h-4">
        <Image {...logo} alt={logo.alt} />
      </div>
      <a
        className="text-blue-900"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </div>
  );
};
