"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

type MenuItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string; desc?: string }[];
};

const NAV: MenuItem[] = [
  {
    label: "Products",
    children: [
      { label: "Wallet-as-a-Service", href: "/products/waas" },
      { label: "On/Off Ramp", href: "/products/ramp" },
      { label: "Compliance Suite", href: "/products/compliance" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Consulting", href: "/services/consulting" },
      { label: "Custom Integrations", href: "/services/integrations" },
      { label: "Support & SLA", href: "/services/support" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    children: [
      { label: "Docs", href: "/resources/docs" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Case Studies", href: "/resources/case-studies" },
    ],
  },
  { label: "About", href: "/about" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const hoverTimers = useRef<Record<string, any>>({});

  // shrink on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menus on route change (optional: if you wire a router event)
  useEffect(() => {
    const close = () => {
      setOpenMenu(null);
      setMobileOpen(false);
    };
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  const handleOpen = (key: string) => {
    clearTimeout(hoverTimers.current[key]);
    setOpenMenu(key);
  };
  const handleClose = (key: string) => {
    hoverTimers.current[key] = setTimeout(() => {
      setOpenMenu((cur) => (cur === key ? null : cur));
    }, 120); // small delay to allow moving cursor
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* top spacer so content isn't hidden */}
      <div className={`transition-all h-6`} />

      {/* pill container */}
      <div
        className={[
          "mx-auto flex height-[80px] items-center justify-around gap-3 px-4 transition-all",
          "bg-white/95 shadow-lg ring-1 ring-black/5",
          "backdrop-blur supports-[backdrop-filter]:bg-white/80",
          "rounded-[999px]",
          "py-3 max-w-5xl",
        ].join(" ")}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Home"
          className="shrink-0 flex items-center gap-3"
        >
          {/* Swap your assets as needed */}
          <img
            src="/Cryption verse for light bg.png"
            alt="Cryption Verse Australia"
            className="h-10 w-auto md:h-12 mb-[10px]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => {
            const hasChildren = !!item.children?.length;
            const key = item.label;

            if (!hasChildren) {
              return (
                <Link
                  key={key}
                  href={item.href || "#"}
                  className="text-[17px] font-medium text-slate-600 hover:text-slate-900"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleOpen(key)}
                onMouseLeave={() => handleClose(key)}
              >
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={openMenu === key}
                  className="group inline-flex items-center gap-1.5 text-[17px] font-medium text-slate-600 hover:text-slate-900"
                  onFocus={() => handleOpen(key)}
                  onBlur={() => handleClose(key)}
                >
                  {item.label}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className={`transition-transform ${
                      openMenu === key ? "rotate-180" : "rotate-0"
                    } text-slate-500 group-hover:text-slate-700`}
                    aria-hidden
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                <div
                  role="menu"
                  className={`absolute left-0 mt-3 w-64 rounded-2xl border border-slate-100 bg-white p-2 shadow-lg transition-all ${
                    openMenu === key
                      ? "pointer-events-auto opacity-100 translate-y-0"
                      : "pointer-events-none opacity-0 -translate-y-1"
                  }`}
                >
                  <ul className="divide-y divide-slate-100/70">
                    {item.children!.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="block rounded-xl px-3 py-3 hover:bg-slate-50"
                        >
                          <div className="text-sm font-semibold text-slate-800">
                            {c.label}
                          </div>
                          {c.desc ? (
                            <div className="mt-0.5 text-xs text-slate-500">
                              {c.desc}
                            </div>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/book-a-call"
            className={[
              "h-[60px] w-[152px]",
              "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white text-[14px] font-semibold",
              "bg-gradient-to-r from-[#6a00ff] via-[#c042f5] to-[#ff7a18]",
              "shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500",
            ].join(" ")}
          >
            Book a call
            <ArrowUp size={20} style={{ transform: "rotate(45deg)" }} />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={[
          "md:hidden px-4 transition-[max-height,opacity] overflow-hidden",
          mobileOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto mt-3 w-full max-w-5xl rounded-3xl border border-slate-200 bg-white p-4 shadow-lg">
          <ul className="space-y-2">
            {NAV.map((item) => {
              const hasChildren = !!item.children?.length;
              if (!hasChildren) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href || "#"}
                      className="block rounded-xl px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <MobileAccordion
                  key={item.label}
                  label={item.label}
                  items={item.children!}
                />
              );
            })}
          </ul>

          <div className="mt-3">
            <Link
              href="/book-a-call"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6a00ff] via-[#c042f5] to-[#ff7a18] px-5 py-3 text-base font-semibold text-white"
            >
              Book a call
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const MobileAccordion = ({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="rounded-xl">
      <button
        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-medium text-slate-700 hover:bg-slate-50"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{label}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>
      <div
        className={[
          "overflow-hidden pl-2",
          "transition-[max-height,opacity] duration-200",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <ul className="mb-2 ml-1 space-y-1 border-l border-slate-200 pl-3">
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className="block rounded-lg px-2 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Header;
