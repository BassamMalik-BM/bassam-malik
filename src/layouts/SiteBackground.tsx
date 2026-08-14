export default function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="
        fixed inset-0 -z-10 overflow-hidden
        bg-[#f8fafc]
        dark:bg-[#020817]
      "
    >
      {/* Top Left Glow */}
      <div
        className="
          absolute -left-40 -top-40
          h-[34rem] w-[34rem]
          rounded-full
          bg-blue-600/20
          blur-3xl
          dark:bg-blue-500/20
        "
      />

      {/* Bottom Right Glow */}
      <div
        className="
          absolute -bottom-40 -right-40
          h-[34rem] w-[34rem]
          rounded-full
          bg-emerald-500/15
          blur-3xl
          dark:bg-emerald-500/15
        "
      />

      {/* Soft Center Gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-slate-100/30
          dark:to-slate-900/30
        "
      />
    </div>
  );
}