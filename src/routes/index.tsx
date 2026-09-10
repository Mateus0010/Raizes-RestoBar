import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Star,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  UtensilsCrossed,
  Martini,
  Leaf,
  BedDouble,
  X,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import {
  photos,
  PHONE_DISPLAY,
  ADDRESS,
  RATING,
  REVIEWS_COUNT,
  WHATSAPP_URL,
  WHATSAPP_SHORTCUTS,
  whatsapp,
  MAPS_URL,
  MAPS_EMBED,
} from "@/lib/raizes";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Raízes Restobar & Suítes | Restaurante em Regência — Linhares/ES" },
      {
        name: "description",
        content:
          "Conheça o Raízes Restobar & Suítes em Regência, Linhares/ES. Comida, drinks, ambiente acolhedor e suítes para aproveitar ainda mais sua experiência em Regência.",
      },
      { property: "og:title", content: "Raízes Restobar & Suítes — Regência, Linhares/ES" },
      {
        property: "og:description",
        content:
          "Comida, drinks, acolhimento e suítes em Regência. Um lugar para criar boas histórias.",
      },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "https://oi-warm-assist.lovable.app/" },
      { property: "og:image", content: `https://oi-warm-assist.lovable.app${photos.fachada}` },
      { name: "twitter:image", content: `https://oi-warm-assist.lovable.app${photos.fachada}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://oi-warm-assist.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Raízes Restobar & Suítes",
          address: {
            "@type": "PostalAddress",
            streetAddress: "R. do Farol",
            addressLocality: "Regência, Linhares",
            addressRegion: "ES",
            postalCode: "29914-050",
            addressCountry: "BR",
          },
          telephone: "+5527999963809",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: 45,
          },
        }),
      },
    ],
  }),
});

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="size-4 fill-dourado text-dourado" />
      ))}
    </span>
  );
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`text-[0.7rem] font-semibold uppercase tracking-[0.3em] ${
        dark ? "text-dourado" : "text-terracota"
      }`}
    >
      {children}
    </p>
  );
}

const trust = [
  { icon: Star, label: `${RATING}/5 no Google`, sub: `${REVIEWS_COUNT} avaliações` },
  { icon: Martini, label: "Drinks", sub: "Para brindar a noite" },
  { icon: UtensilsCrossed, label: "Sabores marcantes", sub: "Feitos para compartilhar" },
  { icon: Leaf, label: "Ambiente acolhedor", sub: "Clima de vila de praia" },
  { icon: BedDouble, label: "Suítes", sub: "Fique mais um pouco" },
];

const menuItems = [
  {
    name: "Quesadilla de boi",
    desc: "O prato que aparece nas avaliações de quem visita e volta.",
    img: photos.quesadilla,
    alt: "Quesadillas douradas servidas em prato preto com molhos ao lado",
  },
  {
    name: "Burrito de porco",
    desc: "Um dos pedidos citados por quem jantou no Raízes.",
    img: null,
    alt: "",
  },
  {
    name: "Burrito de boi",
    desc: "Também mencionado entre os favoritos dos clientes.",
    img: null,
    alt: "",
  },
  {
    name: "Batata frita mexicana",
    desc: "Petisco para dividir na mesa enquanto a noite começa.",
    img: photos.batata,
    alt: "Batata frita mexicana com molhos, bacon e vinagrete",
  },
  {
    name: "Drinks",
    desc: "“As bebidas, perfeitamente temperadas”, como diz quem já provou.",
    img: photos.drinks,
    alt: "Dois drinks em taças com gelo sobre o balcão do bar",
  },
];

const reviews = [
  { text: "Preços bons e donos muito simpáticos e atenciosos." },
  {
    text: "Atendimento excelente de todos, ambiente acolhedor, com um clima que traz paz.",
  },
  { text: "A comida estava deliciosa, as bebidas, perfeitamente temperadas." },
  {
    text: "Havia algum tempo que estávamos planejando conhecer o Raízes e valeu a espera. Atendimento ótimo, local agradável e a comida não decepcionou estava muito gostoso. Já estamos planejando o dia de ir de novo...",
  },
  {
    text: "Amamos a experiência. Jantamos 2 noites. Pedimos batata frita mexicana, quesadilha de boi, burrito de porco, burrito de boi e estava sensacional. Ambiente acolhedor e serviço de excelência.",
  },
  {
    text: "Pedi Quesadilla de boi, comida maravilhosa, feita com muito carinho e cuidado... Atendimento ótimo, espaço muito aconchegante.",
  },
];

const gallery = [
  { src: photos.noite, alt: "Mesas com guarda-sóis do Raízes durante a noite, entre plantas e luzes" },
  { src: photos.quesadilla, alt: "Quesadillas servidas com molhos" },
  { src: photos.bar, alt: "Balcão do bar iluminado com luzes amarelas e painel de árvore" },
  { src: photos.batata, alt: "Batata frita mexicana no prato" },
  { src: photos.fachada, alt: "Entrada do Raízes com placa de madeira iluminada entre árvores" },
  { src: photos.drinks, alt: "Drinks servidos em taças" },
  { src: photos.nachos, alt: "Nachos com queijo, carne e vinagrete" },
  { src: photos.suite1, alt: "Suíte com duas camas e decoração artesanal" },
  { src: photos.suite2, alt: "Suíte com cama de casal e painel de macramê" },
];

const journey = [
  { n: "01", t: "CHEGAR", d: "Descobrir Regência." },
  { n: "02", t: "COMER", d: "Experimentar os sabores do Raízes." },
  { n: "03", t: "BRINDAR", d: "Aproveitar os drinks e a noite." },
  { n: "04", t: "FICAR", d: "Descansar em uma das suítes." },
];

const weekdays = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<null | { src: string; alt: string }>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setLightbox(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div id="topo" className="bg-offwhite text-madeira">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[92svh] w-full overflow-hidden">
        <img
          src={photos.noite}
          alt="Ambiente noturno do Raízes Restobar em Regência, com mesas, guarda-sóis e plantas iluminadas"
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noite/85 via-mata/70 to-noite/95" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-5xl flex-col justify-center px-5 pb-24 pt-32 text-offwhite">
          <Reveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-dourado">
              Regência • Linhares/ES
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 max-w-3xl font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
              Um lugar para criar boas histórias.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-areia sm:text-lg">
              Comida, drinks e acolhimento em um cantinho especial de Regência.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-terracota px-7 py-4 text-base font-semibold text-offwhite transition-all duration-200 hover:bg-laranja active:scale-[0.98]"
              >
                Quero conhecer o Raízes
                <ArrowRight className="size-4" aria-hidden />
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="inline-flex items-center justify-center rounded-full border border-areia/50 px-7 py-4 text-base font-semibold text-offwhite transition-all duration-200 hover:border-dourado hover:text-dourado"
              >
                Ver cardápio
              </button>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex items-center gap-3 text-sm text-areia">
              <Stars />
              <span>
                <strong className="font-semibold text-offwhite">{RATING}</strong> no Google •{" "}
                {REVIEWS_COUNT} avaliações
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BARRA DE CONFIANÇA */}
      <section className="border-y border-areia/60 bg-areia/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 px-5 py-8 sm:grid-cols-3 lg:grid-cols-5">
          {trust.map((t, i) => (
            <Reveal key={t.label} delay={i * 60} className="flex min-w-0 items-start gap-3">
              <t.icon className="mt-0.5 size-5 shrink-0 text-terracota" aria-hidden />
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight">{t.label}</p>
                <p className="text-xs text-madeira/70">{t.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* O RAÍZES */}
      <section id="o-raizes" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="grid grid-cols-5 gap-4">
            <Reveal className="col-span-3">
              <img
                src={photos.fachada}
                alt="Entrada do Raízes Restobar com placa de madeira iluminada"
                loading="lazy"
                className="h-[22rem] w-full rounded-2xl object-cover shadow-xl shadow-mata/15 sm:h-[28rem]"
              />
            </Reveal>
            <Reveal delay={140} className="col-span-2 self-end">
              <img
                src={photos.bar}
                alt="Balcão do bar do Raízes com luzes amarelas"
                loading="lazy"
                className="h-44 w-full rounded-2xl object-cover shadow-lg shadow-mata/15 sm:h-56"
              />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <Eyebrow>O Raízes</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight text-mata sm:text-5xl">
                Não é só sobre comer. É sobre ficar.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-madeira/85">
                <p>Tem lugar que você conhece.</p>
                <p>E tem lugar que faz você querer ficar mais um pouco.</p>
                <p>O Raízes nasceu para ser esse tipo de lugar em Regência.</p>
                <p>
                  Um espaço para jantar, experimentar sabores, tomar um drink, conversar sem pressa e
                  aproveitar a atmosfera da vila.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GASTRONOMIA */}
      <section className="bg-mata text-offwhite">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="max-w-2xl">
            <Eyebrow dark>Da cozinha</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Sabores para sair do óbvio.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-areia">
              Do primeiro petisco ao último drink, a ideia é simples: comida gostosa, bem preparada e
              feita para compartilhar bons momentos.
            </p>
          </Reveal>

          {/* DESTAQUE QUESADILLA */}
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <img
                src={photos.quesadilla}
                alt="Quesadilla de boi servida em fatias com molhos"
                loading="lazy"
                className="h-[24rem] w-full rounded-3xl object-cover shadow-2xl shadow-noite/40 sm:h-[30rem]"
              />
            </Reveal>
            <Reveal delay={140}>
              <Eyebrow dark>Quesadilla de boi</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
                Uma das experiências que fazem o pessoal querer voltar.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-areia">
                Sabores marcantes, preparo cuidadoso e aquele tipo de prato que vira assunto depois do
                jantar.
              </p>
              <blockquote className="mt-6 border-l-2 border-dourado pl-4 text-sm italic leading-relaxed text-areia/90">
                “Pedi Quesadilla de boi, comida maravilhosa, feita com muito carinho e cuidado...”
                <span className="mt-2 block not-italic text-xs text-areia/60">
                  Avaliação no Google
                </span>
              </blockquote>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracota px-6 py-3.5 text-sm font-semibold text-offwhite transition-all duration-200 hover:bg-laranja active:scale-[0.98]"
              >
                Ver cardápio
                <ArrowRight className="size-4" aria-hidden />
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DESTAQUES DO CARDÁPIO */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <Eyebrow>Destaques</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight text-mata sm:text-5xl">
            O que o pessoal pede por aqui.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 80}
              as="article"
              className="group overflow-hidden rounded-2xl border border-areia bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-mata/10"
            >
              {item.img ? (
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              ) : (
                <div className="flex h-52 items-center justify-center bg-mata/90">
                  <UtensilsCrossed className="size-10 text-dourado" aria-hidden />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-display text-2xl text-mata">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-madeira/75">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DRINKS */}
      <section id="drinks" className="relative overflow-hidden bg-noite text-offwhite">
        <img
          src={photos.drinks}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow dark>No copo</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Porque uma boa noite pede um bom drink.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-areia">
              Para acompanhar a comida, começar a noite ou simplesmente brindar Regência.
            </p>
            <a
              href={whatsapp("Olá! Vim pelo site do Raízes e gostaria de saber sobre os drinks.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-dourado/70 px-6 py-3.5 text-sm font-semibold text-dourado transition-all duration-200 hover:bg-dourado hover:text-noite"
            >
              <MessageCircle className="size-4" aria-hidden />
              Perguntar sobre os drinks
            </a>
          </Reveal>
          <Reveal delay={140}>
            <img
              src={photos.drinks}
              alt="Dois drinks gelados em taças sobre o balcão do bar do Raízes"
              loading="lazy"
              className="h-[24rem] w-full rounded-3xl object-cover shadow-2xl shadow-noite/60 sm:h-[28rem]"
            />
          </Reveal>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="bg-areia/35">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="max-w-2xl">
            <Eyebrow>Prova social</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-mata sm:text-5xl">
              Quem conhece, quer voltar.
            </h2>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-madeira/80">
              <Stars />
              <span>
                <strong className="text-madeira">{RATING}</strong> de 5 • {REVIEWS_COUNT} avaliações no
                Google
              </span>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal
                key={i}
                delay={i * 70}
                as="article"
                className="rounded-2xl border border-areia bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-mata/10"
              >
                <Stars className="mb-3" />
                <p className="text-sm leading-relaxed text-madeira/85">“{r.text}”</p>
                <p className="mt-4 text-xs uppercase tracking-widest text-madeira/50">
                  Avaliação no Google
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIENTE */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>O ambiente</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-mata sm:text-5xl">
              Um ambiente que pede para você ficar.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-madeira/85">
              <p>A comida é parte da experiência. O resto acontece na mesa.</p>
              <p>
                Luz baixa, conversa boa, sabores marcantes e aquele clima tranquilo que faz o tempo
                passar diferente.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Reveal>
              <img
                src={photos.noite}
                alt="Clientes jantando à noite sob guarda-sóis do Raízes"
                loading="lazy"
                className="h-56 w-full rounded-2xl object-cover shadow-lg shadow-mata/15 sm:h-72"
              />
            </Reveal>
            <Reveal delay={120} className="mt-8">
              <img
                src={photos.bar}
                alt="Balcão do bar decorado com luzes e painel de árvore"
                loading="lazy"
                className="h-56 w-full rounded-2xl object-cover shadow-lg shadow-mata/15 sm:h-72"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* REGÊNCIA */}
      <section className="bg-mata text-offwhite">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <Reveal>
            <Eyebrow dark>Regência</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Chegar em Regência já muda o ritmo.
            </h2>
            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-areia">
              <p>E o Raízes combina com esse ritmo.</p>
              <p>
                Depois de um dia de praia, surf, passeio pela vila ou simplesmente depois de
                desacelerar, existe um lugar para sentar, comer bem, tomar um drink e aproveitar a
                noite.
              </p>
            </div>
            <p className="mt-8 flex flex-wrap justify-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.2em] text-dourado">
              {["Praia", "Pôr do sol", "Banho", "Raízes", "Jantar", "Drink", "Suíte"].map((s, i) => (
                <span key={s} className="flex items-center gap-3">
                  {i > 0 && <span className="text-areia/40">→</span>}
                  {s}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      {/* SUÍTES */}
      <section id="suites" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Suítes</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-mata sm:text-5xl">
              Fique mais um pouco.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-madeira/85">
              O Raízes também tem suítes para quem quer transformar uma parada em Regência em uma
              experiência completa.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsapp("Olá! Vim pelo site do Raízes e gostaria de conhecer as suítes.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-terracota px-6 py-3.5 text-sm font-semibold text-offwhite transition-all duration-200 hover:bg-laranja active:scale-[0.98]"
              >
                Conhecer as suítes
              </a>
              <a
                href={whatsapp("Olá! Vim pelo site do Raízes e gostaria de saber sobre hospedagem.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-mata/30 px-6 py-3.5 text-sm font-semibold text-mata transition-all duration-200 hover:border-terracota hover:text-terracota"
              >
                Falar sobre hospedagem
              </a>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-madeira/55">
              Informações de capacidade, comodidades e tarifas serão publicadas em breve. Fale conosco
              no WhatsApp para detalhes atualizados.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { src: photos.suite2, alt: "Suíte com cama de casal, painel de macramê e espelho" },
              { src: photos.suite1, alt: "Suíte com duas camas de solteiro e quadro colorido" },
            ].map((s, i) => (
              <Reveal key={s.src} delay={i * 120}>
                <button
                  type="button"
                  onClick={() => setLightbox(s)}
                  className="group block w-full overflow-hidden rounded-2xl"
                  aria-label={`Ampliar foto: ${s.alt}`}
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] sm:h-80"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="bg-madeira text-offwhite">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Por que ir embora tão cedo?
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((j, i) => (
              <Reveal
                key={j.n}
                delay={i * 90}
                className="rounded-2xl border border-areia/20 bg-offwhite/5 p-6"
              >
                <span className="font-display text-3xl text-dourado">{j.n}</span>
                <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-offwhite">
                  {j.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-areia/85">{j.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* GALERIA */}
      <section className="bg-areia/30">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="max-w-2xl">
            <Eyebrow>Galeria</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-mata sm:text-5xl">
              Um pouco do que te espera.
            </h2>
          </Reveal>
          <div className="mt-12 columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
            {gallery.map((g, i) => (
              <Reveal key={g.src + i} delay={(i % 3) * 80} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setLightbox(g)}
                  aria-label={`Ampliar foto: ${g.alt}`}
                  className="group block w-full overflow-hidden rounded-2xl"
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CARDÁPIO */}
      <section id="cardapio" className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
        <Reveal>
          <Eyebrow>Cardápio</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight text-mata sm:text-5xl">
            Agora escolha seu favorito.
          </h2>
          <ul className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-3">
            {menuItems.map((m) => (
              <li
                key={m.name}
                className="rounded-full border border-mata/20 bg-card px-5 py-2.5 text-sm font-medium text-mata"
              >
                {m.name}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-terracota px-7 py-4 text-base font-semibold text-offwhite transition-all duration-200 hover:bg-laranja active:scale-[0.98]"
          >
            Ver cardápio completo
            <ArrowRight className="size-4" aria-hidden />
          </button>
        </Reveal>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="bg-mata text-offwhite">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow dark>Localização</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Encontre suas raízes em Regência.
              </h2>
              <ul className="mt-8 space-y-5 text-sm text-areia">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-dourado" aria-hidden />
                  <span>{ADDRESS}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-dourado" aria-hidden />
                  <a href="tel:+5527999963809" className="hover:text-dourado">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex gap-3">
                  <UtensilsCrossed className="mt-0.5 size-5 shrink-0 text-dourado" aria-hidden />
                  <span>Refeição no local</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-terracota px-6 py-3.5 text-sm font-semibold text-offwhite transition-all duration-200 hover:bg-laranja"
                >
                  <MapPin className="size-4" aria-hidden />
                  Abrir no Google Maps
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-areia/40 px-6 py-3.5 text-sm font-semibold text-offwhite transition-all duration-200 hover:border-dourado hover:text-dourado"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  Falar com o Raízes
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {WHATSAPP_SHORTCUTS.map((s) => (
                  <a
                    key={s.label}
                    href={whatsapp(s.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-areia/25 px-4 py-2 text-xs font-medium text-areia transition-colors duration-200 hover:border-dourado hover:text-dourado"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </Reveal>
            <Reveal delay={140}>
              <iframe
                title="Mapa da localização do Raízes Restobar & Suítes em Regência"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full rounded-2xl border border-areia/20 lg:h-full lg:min-h-[24rem]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* HORÁRIOS */}
      <section className="mx-auto max-w-4xl px-5 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3">
            <Clock className="size-5 text-terracota" aria-hidden />
            <h2 className="font-display text-3xl text-mata sm:text-4xl">Horários</h2>
          </div>
          <p className="mt-3 text-sm text-madeira/75">Confira os horários atuais antes de sair.</p>
          <ul className="mt-8 divide-y divide-areia rounded-2xl border border-areia bg-card">
            {weekdays.map((d) => (
              <li key={d} className="flex items-center justify-between gap-4 px-5 py-3.5 text-sm">
                <span className="font-medium">{d}</span>
                <span className="text-madeira/55">Consulte pelo WhatsApp</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-madeira/55">
            Horários especiais e feriados: confirme pelo WhatsApp {PHONE_DISPLAY}.
          </p>
        </Reveal>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden">
        <img
          src={photos.fachada}
          alt="Fachada iluminada do Raízes Restobar em Regência"
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noite/90 to-mata/90" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center text-offwhite md:py-32">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              A melhor parte da viagem pode começar depois do pôr do sol.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-areia">
              Venha comer, brindar, desacelerar e descobrir o Raízes em Regência.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-terracota px-7 py-4 text-base font-semibold text-offwhite transition-all duration-200 hover:bg-laranja active:scale-[0.98]"
              >
                Quero conhecer o Raízes
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-areia/50 px-7 py-4 text-base font-semibold text-offwhite transition-all duration-200 hover:border-dourado hover:text-dourado"
              >
                <MessageCircle className="size-4" aria-hidden />
                Falar no WhatsApp
              </a>
            </div>
            <p className="mt-10 text-xs uppercase tracking-[0.3em] text-dourado">
              Restobar &amp; Suítes • Regência — Linhares/ES
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-noite text-areia">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl tracking-[0.18em] text-offwhite">RAÍZES</p>
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-dourado">
              Restobar &amp; Suítes
            </p>
            <p className="mt-4 text-sm text-areia/80">Comida, drinks, acolhimento e Regência.</p>
          </div>
          <div className="text-sm">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-offwhite">
              Contato
            </h3>
            <p className="text-areia/80">{ADDRESS}</p>
            <a href="tel:+5527999963809" className="mt-2 block hover:text-dourado">
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-terracota px-5 py-3 text-sm font-semibold text-offwhite transition-colors duration-200 hover:bg-laranja"
            >
              <MessageCircle className="size-4" aria-hidden />
              Falar no WhatsApp
            </a>
          </div>
          <nav className="text-sm" aria-label="Rodapé">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-offwhite">
              Navegue
            </h3>
            <ul className="space-y-2">
              {[
                ["#o-raizes", "O Raízes"],
                ["#cardapio", "Cardápio"],
                ["#drinks", "Drinks"],
                ["#suites", "Suítes"],
                ["#avaliacoes", "Avaliações"],
                ["#localizacao", "Localização"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-areia/80 transition-colors hover:text-dourado">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="border-t border-areia/10 px-5 py-6 text-center text-xs text-areia/50">
          © {new Date().getFullYear()} Raízes Restobar &amp; Suítes — Regência, Linhares/ES
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE (desktop) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-terracota px-5 py-4 font-semibold text-offwhite shadow-xl shadow-noite/30 transition-transform duration-200 hover:scale-105 md:inline-flex"
      >
        <MessageCircle className="size-5" aria-hidden />
        WhatsApp
      </a>

      {/* BARRA FIXA MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-areia/20 bg-noite/95 backdrop-blur md:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex flex-col items-center gap-1 py-3 text-[0.7rem] font-medium text-areia"
        >
          <UtensilsCrossed className="size-5" aria-hidden />
          Cardápio
        </button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 bg-terracota py-3 text-[0.7rem] font-semibold text-offwhite"
        >
          <MessageCircle className="size-5" aria-hidden />
          WhatsApp
        </a>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-[0.7rem] font-medium text-areia"
        >
          <MapPin className="size-5" aria-hidden />
          Como chegar
        </a>
      </div>

      {/* MODAL CARDÁPIO */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Cardápio"
          className="fixed inset-0 z-[60] flex items-end justify-center bg-noite/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="max-h-[85svh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-offwhite p-7 sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <Eyebrow>Cardápio</Eyebrow>
                <h3 className="mt-2 font-display text-3xl text-mata">Sabores do Raízes</h3>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar cardápio"
                className="rounded-full border border-mata/20 p-2 text-mata"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>
            <ul className="mt-6 divide-y divide-areia">
              {menuItems.map((m) => (
                <li key={m.name} className="py-4">
                  <p className="font-semibold text-mata">{m.name}</p>
                  <p className="mt-1 text-sm text-madeira/70">{m.desc}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-madeira/60">
              O cardápio completo com todos os itens e valores é enviado pelo WhatsApp. Fale com a
              gente para receber as opções do dia.
            </p>
            <a
              href={whatsapp("Olá! Vim pelo site do Raízes e gostaria de conhecer o cardápio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-terracota px-6 py-4 text-sm font-semibold text-offwhite transition-colors duration-200 hover:bg-laranja"
            >
              <MessageCircle className="size-4" aria-hidden />
              Pedir o cardápio no WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-noite/95 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Fechar imagem"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 rounded-full border border-areia/40 p-2 text-offwhite"
          >
            <X className="size-5" aria-hidden />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[88svh] w-auto max-w-full rounded-2xl object-contain"
          />
        </div>
      )}
    </div>
  );
}
