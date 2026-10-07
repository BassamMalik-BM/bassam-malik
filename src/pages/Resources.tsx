import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

import SEO from "../components/SEO";
import ResourceCard from "../components/resources/ResourceCard";
import ResourceReader from "../components/resources/ResourceReader";

import {
  resources,
  getResourceByFilename,
} from "../data/resources";
import type { Resource } from "../data/resources";

export default function Resources() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedResource =
    getResourceByFilename(searchParams.get("pdf")) ?? null;

  const visibleResources = resources.filter(
    (resource) => resource.id !== selectedResource?.id,
  );

  const previewHeadingRef = useRef<HTMLHeadingElement>(null);
  const lastReadButtonIdRef = useRef<string | null>(null);
  const restoreReadButtonFocusRef = useRef(false);

  useEffect(() => {
    if (selectedResource) {
      previewHeadingRef.current?.focus({ preventScroll: true });
      previewHeadingRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (restoreReadButtonFocusRef.current) {
      restoreReadButtonFocusRef.current = false;

      const readButton = lastReadButtonIdRef.current
        ? document.getElementById(lastReadButtonIdRef.current)
        : null;

      readButton?.focus({ preventScroll: true });
      readButton?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedResource]);

  function openPreview(
    resource: Resource,
    _button: HTMLButtonElement,
  ) {
    lastReadButtonIdRef.current = `read-resource-${resource.id}`;
    restoreReadButtonFocusRef.current = false;

    if (selectedResource === resource) {
      previewHeadingRef.current?.focus({ preventScroll: true });
      previewHeadingRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    setSearchParams((previousParams) => {
      const nextParams = new URLSearchParams(previousParams);
      nextParams.set("pdf", resource.filename);
      return nextParams;
    });
  }

  function closePreview() {
    restoreReadButtonFocusRef.current = true;

    setSearchParams((previousParams) => {
      const nextParams = new URLSearchParams(previousParams);
      nextParams.delete("pdf");
      return nextParams;
    });
  }

  return (
    <div>
      <SEO
        title="Free PDF Resources"
        description="Read or download beginner-friendly PDF guides covering candlesticks, trends, support and resistance, and chart patterns."
        path="/resources"
      />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
          Resources
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
          Learn at your own pace.
          <span className="mt-2 block gradient-text">
            Take the guides with you.
          </span>
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Explore PDF guides to build your chart-reading knowledge.
          Read them here or download a copy to study offline.
          Each guide is labelled by learning level.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300">
          <FileText size={16} aria-hidden="true" />
          {resources.length} free PDF guides
        </div>
      </motion.section>

      {selectedResource && (
        <ResourceReader
          resource={selectedResource}
          headingRef={previewHeadingRef}
          onClose={closePreview}
        />
      )}

      {visibleResources.length > 0 && (
        <section
          aria-label={
            selectedResource
              ? "Other downloadable PDF guides"
              : "Downloadable PDF guides"
          }
          className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {visibleResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              onRead={openPreview}
            />
          ))}
        </section>
      )}
    </div>
  );
}