import { Statistics } from "./Statistics";
import Neural from "../assets/Neural.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
     <div className="bg-muted/50 border rounded-lg py-12">
  <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
    <img
      src={Neural}
      alt="Illustration of calm productivity"
      className="w-[300px] object-contain rounded-lg"
    />
    <div className="bg-green-0 flex flex-col justify-between">
      <div className="pb-6">
        <h2 className="inline text-4xl md:text-4xl font-bold">
          <span className="bg-clip-text">
            About{" "}
          </span>
         <span className="inline bg-gradient-to-r from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text">
        Neuroease
      </span>{" "}
        </h2>
        <p className="text-xl text-muted-foreground mt-4">
          Neuroease is built for minds that work differently. Whether you're managing ADHD, burnout, anxiety, or just feeling overwhelmed — our tools support you in starting, focusing, and finishing tasks without pressure.
          <br />
          <br />
          We combine behavioral science and empathetic design to make daily routines feel easier, lighter, and human.
        </p>
      </div>

      <Statistics />
    </div>
  </div>
</div>

    </section>
  );
};
