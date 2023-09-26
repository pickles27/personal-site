import Image, { StaticImageData } from "next/image";

export interface SocialLinkProps {
  alt: string;
  height: number;
  linkHref: string;
  linkLabel: string;
  logo: StaticImageData;
  width: number;
}

export const SocialLink = ({
  alt,
  height,
  linkHref,
  linkLabel,
  logo,
  width,
}: SocialLinkProps) => (
  <div className="flex items-center gap-1">
    <div className="w-5 h-4">
      <Image alt={alt} height={height} src={logo} width={width} />
    </div>
    <a
      className="text-blue-900"
      href={linkHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkLabel}
    </a>
  </div>
);
