export const dynamic = "force-dynamic";

import { getPorto } from "@/lib/db";
import { signOut } from "../login/actions";
import PortoAdmin from "./PortoAdmin";

export default async function AdminPortfolioPage() {
  let portfolio: Awaited<ReturnType<typeof getPorto>> = [];
  let dbError = false;

  try {
    portfolio = await getPorto();
  } catch {
    dbError = true;
  }

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Header */}
      <header className="border-b border-sage-light/40 px-6 md:px-16 py-6 flex items-center justify-between sticky top-0 bg-cream/90 backdrop-blur z-40">
        <div>
          <p className="text-[10px] tracking-[0.22em] uppercase text-sage-dark font-sans">
            Swatu Engineering
          </p>

          <h1 className="font-serif text-xl font-light">
            Portfolio <em className="italic text-warm">Admin</em>
          </h1>
        </div>

        <form action={signOut}>
          <button className="text-[11px] tracking-[0.16em] uppercase border border-charcoal px-5 py-2 hover:bg-charcoal hover:text-white transition font-sans">
            Sign Out
          </button>
        </form>
      </header>

      <main className="px-6 md:px-16 py-14">
        {dbError ? (
          <div className="border border-red-300 p-10 text-center">
            <p className="font-serif italic text-lg mb-2">
              Database connection error
            </p>

            <p className="text-sm text-[#6b6b68]">
              Please check DATABASE_URL configuration.
            </p>
          </div>
        ) : (
          <PortoAdmin portfolio={portfolio} />
        )}
      </main>
    </div>
  );
}
