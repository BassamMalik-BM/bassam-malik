import { Outlet, useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function PageLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <main className="relative z-10 min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {!isHome && (
          <div className="mb-8 sm:mb-10">
            <Breadcrumbs />
          </div>
        )}

        <Outlet />
      </div>
    </main>
  );
}