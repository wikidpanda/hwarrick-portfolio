import Image from "next/image";
import { PageShell } from "@/components/PageShell";

const portfolioItems = [
  {
    id: "mouse-enclosure",
    title: "Custom Mouse Enclosure",
    description:
      "CAD exploration for a custom peripheral enclosure, including internal volume studies and DFM considerations.",
    image: "/images/mouse-wireframe.png",
  },
  {
    id: "pcb-prototype",
    title: "PCB Prototype",
    description:
      "Prototype validation from PCB layout through assembled hardware on the bench.",
    image: "/images/pcb-photo.png",
  },
  {
    id: "pcb-layout",
    title: "PCB Layout",
    description:
      "Board layout and routing work for embedded hardware development.",
    image: "/images/pcb-layout.png",
  },
  {
    id: "enclosure-wireframe",
    title: "Enclosure Wireframe",
    description:
      "Early enclosure concept studies for consumer electronics housings.",
    image: "/images/enclosure-wireframe.png",
  },
];

export default function PortfolioPage() {
  return (
    <PageShell activePath="/portfolio">
      <div className="max-w-4xl">
        <p className="font-serif text-sm uppercase tracking-[0.25em] text-cream/70">
          Work Samples
        </p>
        <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
          Portfolio
        </h2>
        <p className="mt-4 max-w-2xl font-serif text-base leading-7 text-white/90">
          CAD, PCB, and product visuals — the kind of work that shows up in
          design reviews, supplier conversations, and prototype builds.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {portfolioItems.map((item) => (
          <article
            key={item.id}
            id={item.id}
            className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
          >
            <div className="relative aspect-[4/3] bg-black/30">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-2xl text-white">{item.title}</h3>
              <p className="mt-2 font-serif text-sm leading-6 text-cream/90">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
