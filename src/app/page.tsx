import { Hero } from "@/components/hero/Hero";
import { StoryIntro } from "@/components/story-intro/StoryIntro";
import { Timeline } from "@/components/timeline/Timeline";
import { Gallery } from "@/components/gallery/Gallery";
import { LoveLetter } from "@/components/letter/LoveLetter";
import { Proximity } from "@/components/proximity/Proximity";
import { Finale } from "@/components/finale/Finale";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StoryIntro />
      <Timeline />
      <Gallery />
      <LoveLetter />
      <Proximity />
      <Finale />
    </main>
  );
}
