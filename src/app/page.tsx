import { SocialLink } from "@/components/SocialLink";
import { Social } from "@/utils/getLinkDataBySocial";
import Image from "next/image";
import headshot from "public/headshot.jpg";

export default function Home() {
  return (
    <main className="min-h-screen sm:grid sm:grid-cols-2 sm:items-center sm:gap-3 p-10 sm:p-0">
      <figure className="w-full rounded sm:w-80 overflow-hidden ml-auto">
        <Image
          src={headshot}
          alt="Sarah headshot"
          priority
          placeholder="blur"
        />
      </figure>
      <div className="flex flex-col gap-3 mt-5 sm:mt-0 sm:p-5 sm:w-80 text-sm">
        <h1 className="font-serif text-xl">Sarah Pickrahn</h1>
        <p className="text-slate-800">
          Hi, I’m Sarah! I’m a front-end engineer living in Snohomish, WA with
          my boyfriend and 2 cats, Zombie and Penelope. When I’m not working, I
          love rock climbing, lifting weights, playing video games, and
          painting.
        </p>
        {Object.values(Social).map((social) => (
          <SocialLink key={social} social={social} />
        ))}
      </div>
    </main>
  );
}
