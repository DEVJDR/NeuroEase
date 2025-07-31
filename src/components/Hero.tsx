import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
    <div className="text-center lg:text-start space-y-6">
  <main className="text-5xl md:text-6xl font-bold">
    <h1 className="inline">
      <span className="inline bg-gradient-to-r from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text">
        Neuroease
      </span>{" "}
      helps you get started
    </h1>{" "}
    when everything feels too much.
  </main>

  <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
    Struggle with task initiation, overwhelm, or executive dysfunction? 
    Neuroease gently guides you — one step at a time — with smart timers, supportive tools, and emotional ease.
  </p>

  <div className="space-y-4 md:space-y-0 md:space-x-4">
   <a
  href="https://github.com/DEVJDR/ADHD_Pro/releases/tag/v0.1"
  className="w-full md:w-1/3 inline-flex justify-center items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
  download
>
  Download Now
</a>


    <a
      rel="noreferrer noopener"
      href="https://github.com/DEVJDR"
      target="_blank"
      className={`w-full md:w-1/3 ${buttonVariants({
        variant: "outline",
      })}`}
    >
      View Code on GitHub
      <GitHubLogoIcon className="ml-2 w-5 h-5" />
    </a>
  </div>
</div>


      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
