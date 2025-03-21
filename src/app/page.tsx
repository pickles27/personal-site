import { SocialLinks } from "components/SocialLinks";
import headshot from "public/headshot.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col sm:flex-row justify-center items-center sm:gap-2 p-10">
      <figure className="w-full rounded-lg sm:w-80 overflow-hidden drop-shadow-md">
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
          Hi, I&apos;m Sarah. I&apos;m a software engineer living in Hayward, CA
          with my partner and 2 cats. When I&apos;m not working, I love
          powerlifting, dance, rock climbing, and playing video games!
        </p>
        <SocialLinks />
      </div>
    </main>
  );
}
