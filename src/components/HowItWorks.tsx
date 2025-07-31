import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Start Small",
    description:
      "Begin with tiny, achievable steps using the 'Just One Step' mode. No pressure—just progress.",
  },
  {
    icon: <MapIcon />,
    title: "Guided Routine Flow",
    description:
      "Follow a personalized, structured sequence with built-in breathing breaks and clear transitions.",
  },
  {
    icon: <PlaneIcon />,
    title: "Focus & Reset Tools",
    description:
      "Stuck? Shift gears with the Panic Button or Resume Flow tools to reduce overwhelm and regain clarity.",
  },
  {
    icon: <GiftIcon />,
    title: "Reward & Reflect",
    description:
      "Earn calming animations or motivational nudges after completing tasks—designed to support dopamine flow.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          NeuroEase{" "}
        </span>
        Supports You
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        A step-by-step journey designed for neurodivergent minds—whether you're starting, switching, or struggling.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
