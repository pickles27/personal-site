import Image from "next/image";
import headshot from "public/headshot.jpg";
import githubLogo from "public/github-mark.png";
import linkedinLogo from "public/linkedin-logo.png";
import mailLogo from "public/mail.png";
import { SocialLink } from "components/SocialLink";

export default function Home() {
  return (
    <main className="min-h-screen sm:grid sm:grid-cols-2 sm:items-center sm:gap-3">
      <figure className="w-full sm:rounded sm:w-80 overflow-hidden ml-auto">
        <Image
          src={headshot}
          alt="Sarah headshot"
          priority
          placeholder="blur"
        />
      </figure>
      <div className="flex flex-col gap-3 p-5 sm:w-80 text-sm">
        <h1 className="font-serif text-xl">Sarah Pickrahn</h1>
        <p className="text-slate-800">
          Hi, I’m Sarah! I’m a front-end engineer living in Snohomish, WA with
          my boyfriend and 2 cats, Zombie and Penelope. When I’m not working, I
          love rock climbing, lifting weights, and painting.
        </p>
        <SocialLink
          alt="github logo"
          height={16}
          linkHref="https://github.com/pickles27"
          linkLabel="github.com/pickles27"
          logo={githubLogo}
          width={16}
        />
        <SocialLink
          alt="linkedin logo"
          height={16}
          linkHref="https://www.linkedin.com/in/sarah-pickrahn"
          linkLabel="linkedin.com/in/sarah-pickrahn"
          logo={linkedinLogo}
          width={19}
        />
        <SocialLink
          alt="email Sarah"
          height={16}
          linkHref="mailto:sarah.pickrahn@gmail.com"
          linkLabel="Email me"
          logo={mailLogo}
          width={16}
        />
      </div>
    </main>
  );
}
