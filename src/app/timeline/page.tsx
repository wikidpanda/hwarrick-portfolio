import { PageShell } from "@/components/PageShell";
import { TimelineExperience } from "@/components/TimelineExperience";

export default function TimelinePage() {
  return (
    <PageShell activePath="/timeline">
      <TimelineExperience />
    </PageShell>
  );
}
