import AnimatedPage from '../components/AnimatedPage';
import ResourceCard from '../components/ResourceCard';
import SectionHeader from '../components/SectionHeader';
import { resources } from '../data/resources';

export default function Resources() {
  return (
    <AnimatedPage>
      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-page">
          <SectionHeader eyebrow="Resources" title="Useful learning tools for beginners" description="Simple educational resources to help you organize your learning, review risk, and understand spot trading concepts." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => <ResourceCard key={resource.title} resource={resource} />)}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
