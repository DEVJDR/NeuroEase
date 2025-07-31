import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/focus.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Task Initiation Boost",
    description:
      "Struggling to start tasks? Use our 'Just One Step' mode to break down overwhelm and get moving without pressure.",
    image: image4,
  },
  {
    title: "Focus Mode with Timer & Rewards",
    description:
      "Stay on track with dynamic timers, subtle nudges, and dopamine-boosting mini rewards after completing micro-tasks.",
    image: image3,
  },
  {
    title: "Guided Reflection & Shift Support",
    description:
      "End your sessions with calming prompts and transition tools, designed to help you smoothly move between tasks or routines.",
    image: image,
  },
];


const featureList: string[] = [
  "Neurodivergent-friendly design",
  "Motivation triggers",
  "Routine reminders",
  "Breathing & grounding tools",
  "Monochrome theme",
  "Session summary & reflection",
  "Distraction blockers",
  "Sticky notes for working memory",
  "No sign-up needed",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
