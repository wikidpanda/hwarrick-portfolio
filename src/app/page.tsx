import { FeaturedWork } from "@/components/FeaturedWork";
import { GridHero } from "@/components/GridHero";
import { LandingShell } from "@/components/LandingShell";
import { PracticeBand } from "@/components/PracticeBand";

export default function HomePage() {
  return (
    <LandingShell>
      <GridHero />
      <PracticeBand />
      <FeaturedWork />
    </LandingShell>
  );
}
