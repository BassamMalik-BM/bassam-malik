import { Download } from "lucide-react";
import type { RefObject } from "react";

import type {
  Resource,
  ResourceLevel,
} from "../../data/resources";

const levelStyles: Record<ResourceLevel, string> = {
  Beginner:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  Intermediate:
    "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
  Advanced:
    "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300",
};

type ResourceReaderProps = {
  resource: Resource;
  headingRef: RefObject<HTMLHeadingElement | null>;
  onClose: () => void;
};

export default function ResourceReader({
  resource,
  headingRef,
  onClose,
}: ResourceReaderProps) {
  const pdfUrl = `/downloads/${resource.filename}`;

  return (
    <section
      aria-labelledby="pdf-preview-title"
      className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-premium dark:border-white/10 dark:bg-navy-900"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 p-5 dark:border-white/10 sm:p-6">
        <div>
          <span
            className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
              levelStyles[resource.level]
            }`}
          >
            {resource.level}
          </span>

          <h2
            id="pdf-preview-title"
            ref={headingRef}
            tabIndex={-1}
            className="scroll-mt-28 text-xl font-bold text-slate-950 focus:outline-none dark:text-white"
          >
            {resource.title}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={pdfUrl}
            download={resource.filename}
            aria-label={`Download ${resource.title} as a PDF`}
            className="button-primary gap-2"
          >
            <Download size={17} aria-hidden="true" />
            Download PDF
          </a>

          <button
            type="button"
            onClick={onClose}
            className="button-secondary"
          >
            Close preview
          </button>
        </div>
      </div>

      <iframe
        key={resource.filename}
        src={pdfUrl}
        title={`${resource.title} — PDF reader`}
        className="block h-[70vh] min-h-[400px] w-full border-0 bg-slate-100 dark:bg-slate-950"
      />

      <p className="px-5 py-4 text-sm text-slate-600 dark:text-slate-400 sm:px-6">
        Preview not displaying?{" "}
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 underline underline-offset-4 dark:text-blue-400"
        >
          Open PDF in a new tab
        </a>
        .
      </p>
    </section>
  );
}