import AnimatedPage from "../components/AnimatedPage";
import ResourceCard from "../components/ResourceCard";
import SectionHeader from "../components/SectionHeader";
import { tools } from "../data/tools";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Tools() {
  return (
    <AnimatedPage>
      <section className="section-padding">
        <div className="container-page">
          <Breadcrumbs />

          <SectionHeader
            eyebrow="Tools"
            title="Interactive tools for smarter crypto learning"
            description="Practical beginner-friendly tools designed to help you stay organized, build discipline, and make better crypto trading decisions."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ResourceCard key={tool.title} resource={tool} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}