import Image from "next/image";
import headshot from "./headshot.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="flex flex-wrap">
        <div className="rounded-md">
          <Image
            src={headshot}
            alt="Sarah headshot"
            priority
            width="300"
            height="300"
          />
        </div>
        <div className="mt-4 sm:mt-0 px-5">
          <h1>Sarah Pickrahn</h1>
          <p>copy: tbd</p>
          <div className="flex flex-col text-slate-900 text-sm">
            <a href="https://github.com/pickles27">Github</a>
            <a href="https://www.linkedin.com/in/sarah-pickrahn/">LinkedIn</a>
          </div>
        </div>
      </div>
    </main>
  );
}
