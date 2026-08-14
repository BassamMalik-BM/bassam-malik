import { Link } from "react-router-dom";

export default function ArticleDisclaimer() {
  return (
    <section className="mt-8 border-t border-slate-200 pt-8 dark:border-white/10">
      <p className="text-sm leading-8 text-slate-600 italic dark:text-slate-400">
        <span className="font-semibold text-slate-900 dark:text-white">
          Disclaimer:
        </span>{" "}
        This content is provided for educational and informational purposes
        only and should not be considered financial, investment, legal, or tax
        advice. Cryptocurrency markets are highly volatile and involve risk, so
        always conduct your own research before making financial decisions and
        never invest more than you can afford to lose. By using this website,
        you acknowledge and agree to our{" "}
        <Link
          to="/risk-disclaimer"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Risk Disclaimer
        </Link>
        ,{" "}
        <Link
          to="/terms-and-conditions"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Terms &amp; Conditions
        </Link>
        , and{" "}
        <Link
          to="/privacy-policy"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </section>
  );
}