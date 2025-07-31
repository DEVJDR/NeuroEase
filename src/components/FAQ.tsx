import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is NeuroEase and who is it for?",
    answer:
      "NeuroEase is a supportive routine and focus app designed for individuals with ADHD, executive dysfunction, and anyone needing help with daily structure and mental clarity.",
    value: "item-1",
  },
  {
    question: "Do I need a diagnosis to use the app?",
    answer:
      "No. NeuroEase is for anyone who feels overwhelmed, struggles with starting tasks, or wants help staying on track—diagnosis or not.",
    value: "item-2",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Absolutely. We don’t collect sensitive personal data. Your routines and notes are stored securely on your device (or encrypted on our servers if sync is enabled).",
    value: "item-3",
  },
  {
    question: "Will this app help with procrastination and task anxiety?",
    answer:
      "Yes! NeuroEase includes tools like 'Just One Step' mode, gentle timers, and dopamine-boosting microtask flows to reduce overwhelm and support task initiation.",
    value: "item-4",
  },
  {
    question: "Is the app free to use?",
    answer:
      "The core features are completely free. Optional upgrades may unlock advanced planning tools or cloud sync, but the basics are always accessible.",
    value: "item-5",
  },
];



export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
