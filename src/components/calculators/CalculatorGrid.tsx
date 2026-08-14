// src/components/calculators/CalculatorGrid.tsx

export default function CalculatorGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
      {children}
    </section>
  );
}