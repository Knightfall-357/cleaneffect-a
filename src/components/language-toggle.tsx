"use client";

import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/cn";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector / Seletor de idioma"
      className={cn(
        "inline-flex items-center rounded-full border border-brand-200/90 bg-white/90 p-0.5 shadow-sm backdrop-blur",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setLocale("pt")}
        aria-pressed={locale === "pt"}
        className={cn(
          "flex items-center gap-1 rounded-full px-2.5 py-1 text-[11.5px] font-semibold transition-all duration-300",
          locale === "pt"
            ? "bg-brand-950 text-white shadow-sm"
            : "text-slate-600 hover:text-brand-950",
        )}
      >
        <span className="text-[12px]" aria-hidden="true">🇵🇹</span>
        PT
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={cn(
          "flex items-center gap-1 rounded-full px-2.5 py-1 text-[11.5px] font-semibold transition-all duration-300",
          locale === "en"
            ? "bg-brand-950 text-white shadow-sm"
            : "text-slate-600 hover:text-brand-950",
        )}
      >
        <span className="text-[12px]" aria-hidden="true">🇬🇧</span>
        EN
      </button>
    </div>
  );
}
