import type { SVGProps } from "react";

export type HomeIconName =
  | "book"
  | "bitcoin"
  | "ethereum"
  | "blockchain"
  | "wallet"
  | "exchange"
  | "chart"
  | "analysis"
  | "shield"
  | "psychology"
  | "calculator"
  | "research"
  | "update"
  | "language"
  | "education"
  | "check";

interface HomeIconProps extends SVGProps<SVGSVGElement> {
  name: HomeIconName;
}

export default function HomeIcon({
  name,
  className = "h-6 w-6",
  ...props
}: HomeIconProps) {
  const sharedProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const icons: Record<HomeIconName, React.ReactNode> = {
    book: (
      <>
        <path d="M4.5 5.5A2.5 2.5 0 0 1 7 3h4v16H7a2.5 2.5 0 0 0-2.5 2.5z" />
        <path d="M19.5 5.5A2.5 2.5 0 0 0 17 3h-4v16h4a2.5 2.5 0 0 1 2.5 2.5z" />
      </>
    ),

    bitcoin: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 7.5h4.2a2.3 2.3 0 0 1 0 4.6H9" />
        <path d="M9 12.1h4.8a2.4 2.4 0 0 1 0 4.8H9" />
        <path d="M10.5 5.8v12.4M13.2 5.8v12.4" />
      </>
    ),

    ethereum: (
      <>
        <path d="m12 3-5 9 5 3 5-3z" />
        <path d="m7 13 5 8 5-8-5 3z" />
      </>
    ),

    blockchain: (
      <>
        <rect x="3" y="4" width="6" height="6" rx="1.5" />
        <rect x="15" y="4" width="6" height="6" rx="1.5" />
        <rect x="9" y="14" width="6" height="6" rx="1.5" />
        <path d="M9 7h6M6 10v2l4 3M18 10v2l-4 3" />
      </>
    ),

    wallet: (
      <>
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a2 2 0 0 1 2 2v11H6.5A2.5 2.5 0 0 1 4 15.5z" />
        <path d="M4 8h13M16 11h4v4h-4a2 2 0 0 1 0-4z" />
      </>
    ),

    exchange: (
      <>
        <path d="M5 8h13M15 5l3 3-3 3" />
        <path d="M19 16H6M9 13l-3 3 3 3" />
      </>
    ),

    chart: (
      <>
        <path d="M4 20V5M4 20h16" />
        <path d="m7 15 4-4 3 2 5-6" />
        <path d="M16 7h3v3" />
      </>
    ),

    analysis: (
      <>
        <path d="M4 20V9M10 20V4M16 20v-7M22 20H2" />
        <path d="m4 7 6-4 6 7 5-5" />
      </>
    ),

    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.7 2.8 8.1 7 10 4.2-1.9 7-5.3 7-10V6z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),

    psychology: (
      <>
        <path d="M9.5 20v-3.5A6.5 6.5 0 1 1 17 10v2l2 3h-3v5" />
        <path d="M8 10.5c1.2-1.5 2.5-1.5 4 0 1.5-1.5 2.8-1.5 4 0" />
      </>
    ),

    calculator: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8 7h8M8 11h1M12 11h1M16 11h1M8 15h1M12 15h1M16 15h1" />
      </>
    ),

    research: (
      <>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 5 5M8 10.5h5M10.5 8v5" />
      </>
    ),

    update: (
      <>
        <path d="M20 7v5h-5" />
        <path d="M4 17v-5h5" />
        <path d="M6.1 8A7 7 0 0 1 18 6l2 6" />
        <path d="M17.9 16A7 7 0 0 1 6 18l-2-6" />
      </>
    ),

    language: (
      <>
        <path d="M4 5h10M9 3v2M6 9c1.8 3 4.4 5.2 8 6" />
        <path d="M13 6c-1.2 4.2-3.8 7.2-8 9" />
        <path d="m15 20 3-8 3 8M16 17h4" />
      </>
    ),

    education: (
      <>
        <path d="m3 9 9-5 9 5-9 5z" />
        <path d="M7 12v5c3 2 7 2 10 0v-5M21 9v6" />
      </>
    ),

    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...sharedProps}
      {...props}
    >
      {icons[name]}
    </svg>
  );
}