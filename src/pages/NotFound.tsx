import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

export default function NotFound() {
  return (
    <AnimatedPage>
      <section className="section-padding bg-slate-50 text-center dark:bg-navy-950">
        <div className="container-page">
          <h1 className="text-4xl font-bold text-slate-950 dark:text-white">Page not found</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">The page you are looking for does not exist.</p>
          <Link to="/" className="button-primary mt-8">Back Home</Link>
        </div>
      </section>
    </AnimatedPage>
  );
}
