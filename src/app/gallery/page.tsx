import Image from "next/image";
import { PageShell } from "@/components/PageShell";

const galleryItems = [
  {
    src: "/images/dekanova-case-study.png",
    alt: "Dekanova case study title card",
    caption: "Dekanova case study",
  },
  {
    src: "/images/mouse-wireframe.png",
    alt: "Mouse wireframe render",
    caption: "Mouse enclosure, SolidWorks",
  },
  {
    src: "/images/enclosure-wireframe.png",
    alt: "Keypad PCB layout",
    caption: "Keypad PCB layout",
  },
  {
    src: "/images/pcb-layout.png",
    alt: "SolidWorks enclosure model",
    caption: "Enclosure, SolidWorks",
  },
  {
    src: "/images/case-study-wireframe.png",
    alt: "Dekanova panel and volume study",
    caption: "Panel and volume study",
  },
  {
    src: "/images/pcb-photo.png",
    alt: "PCB prototype photo",
    caption: "Prototype photo",
  },
];

export default function GalleryPage() {
  return (
    <PageShell activePath="/gallery">
      <div className="max-w-4xl">
        <p className="font-serif text-sm uppercase tracking-[0.25em] text-cream/70">
          Visual Archive
        </p>
        <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
          Gallery
        </h2>
        <p className="mt-4 max-w-2xl font-serif text-base leading-7 text-white/90">
          A visual index of portfolio artifacts — wireframes, boards, branding,
          and prototype photography.
        </p>
      </div>

      <div className="mt-10 columns-1 gap-6 sm:columns-2 xl:columns-3">
        {galleryItems.map((item) => (
          <figure
            key={item.src}
            className="mb-6 break-inside-avoid overflow-hidden rounded-xl border border-white/10 bg-white/5"
          >
            <div className="relative">
              <Image
                src={item.src}
                alt={item.alt}
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="px-4 py-3 font-serif text-sm text-cream/90">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </PageShell>
  );
}
