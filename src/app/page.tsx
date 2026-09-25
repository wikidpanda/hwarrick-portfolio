import { CategoryExplorer } from "@/components/CategoryExplorer";
import { FeaturedWork } from "@/components/FeaturedWork";
import { GridHero } from "@/components/GridHero";
import { LandingShell } from "@/components/LandingShell";
import { PracticeBand } from "@/components/PracticeBand";

export default function HomePage() {
  return (
    <LandingShell>
      <GridHero />
      <div id="work" className="mt-8">
        <CategoryExplorer paper />
      </div>
      <PracticeBand />
      <FeaturedWork />
    </LandingShell>
  );
}
