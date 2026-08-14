import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeCallToAction() {
  return (
    <section className="pb-20 pt-10 sm:pb-24 sm:pt-14">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-500 px-6 py-14 text-center shadow-[0_20px_60px_rgba(37,99,235,0.18)] sm:px-10 sm:py-16">
          {/* Soft glow overlays */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-3xl">
            {/* Icon */}
            <div className="mx-auto flex h-12 w-12 items-center justify-center text-white">
              <BookOpen size={38} strokeWidth={2} />
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to learn with a safer mindset?
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
              Explore guides, templates, and beginner lessons designed for
              responsible crypto spot trading education.
            </p>

            {/* CTA */}
            <div className="mt-9 flex justify-center">
              <Link
                to="/learn"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-blue-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md"
              >
                Open Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}