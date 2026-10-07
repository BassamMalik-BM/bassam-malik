import { Download, FileText } from "lucide-react";

import ResourceCover from "./ResourceCover";
import type { Resource } from "../../data/resources";

type ResourceCardProps = {
  resource: Resource;
  onRead: (
    resource: Resource,
    button: HTMLButtonElement,
  ) => void;
};

export default function ResourceCard({
  resource,
  onRead,
}: ResourceCardProps) {
  return (
    <article className="mx-auto flex w-full max-w-[380px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-premium dark:border-white/10 dark:bg-navy-900">
      <ResourceCover resource={resource} />

      <div className="flex flex-col gap-3 border-t border-slate-200 p-5 dark:border-white/10 sm:flex-row">
        <button
          id={`read-resource-${resource.id}`}
          type="button"
          onClick={(event) =>
            onRead(resource, event.currentTarget)
          }
          aria-label={`Read ${resource.title}`}
          className="button-primary gap-2 sm:flex-1"
        >
          <FileText size={17} aria-hidden="true" />
          Read PDF
        </button>

        <a
          href={`/downloads/${resource.filename}`}
          download={resource.filename}
          aria-label={`Download ${resource.title} as a PDF`}
          className="button-secondary gap-2 sm:flex-1"
        >
          <Download size={17} aria-hidden="true" />
          Download
        </a>
      </div>
    </article>
  );
}