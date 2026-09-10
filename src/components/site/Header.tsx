import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/raizes";
import { cn } from "@/lib/utils";

const links = [
  { href: "#o-raizes", label: "O Raízes" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#drinks", label: "Drinks" },
  { href: "#suites", label: "Suítes" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-noite/95 shadow-lg shadow-noite/30 backdrop-blur"
          : "bg-gradient-to-b from-noite/80 to-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:py-4">
        <a href="#topo" className="min-w-0 leading-none">
          <span className="block font-display text-2xl tracking-[0.18em] text-offwhite md:text-[1.6rem]">
            RAÍZES
          </span>
          <span className="block text-[0.62rem] uppercase tracking-[0.32em] text-dourado">
            Restobar &amp; Suítes
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-areia transition-colors duration-200 hover:text-dourado"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-terracota px-5 py-2.5 text-sm font-semibold text-offwhite transition-all duration-200 hover:bg-laranja active:scale-[0.97]"
          >
            Falar conosco
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="rounded-full bg-terracota p-2.5 text-offwhite active:scale-95"
          >
            <MessageCircle className="size-5" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="rounded-full border border-areia/40 p-2.5 text-offwhite"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Menu mobile" className="border-t border-areia/15 bg-noite lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-areia/10 py-4 text-base font-medium text-areia"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
