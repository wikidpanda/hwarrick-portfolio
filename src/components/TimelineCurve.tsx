import Image from "next/image";

export function TimelineCurve() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-[24%] hidden w-[33%] md:block"
    >
      <Image
        src="/images/divider-curve.svg"
        alt=""
        fill
        className="object-contain object-center"
        priority
      />
    </div>
  );
}
