export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

 const stats: statsProps[] = [
  {
    quantity: "1 in 7",
    description: "People think and learn differently — you're not alone.",
  },
  {
    quantity: "6%",
    description: "Adults live with ADHD — and many go undiagnosed.",
  },
  {
    quantity: "70M+",
    description: "Experience cognitive burnout — support matters.",
  },
  {
    quantity: "80%",
    description: "Find it hard to start tasks when overwhelmed.",
  },
];


  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
