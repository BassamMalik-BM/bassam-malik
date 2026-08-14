import HomeHero from "../components/home/HomeHero";
import ScrollLearn from "../components/home/ScrollLearn";
import ScrollDiscover from "../components/home/ScrollDiscover";
import ToolsCalculatorsPreview from "../components/home/ToolsCalculatorsPreview";
import HomeTrust from "../components/home/HomeTrust";
import HomeCallToAction from "../components/home/HomeCallToAction";
import LearningPaths from "../components/home/LearningPaths";

export default function Home() {
  return (
    <main className="relative">
      <HomeHero />

      <HomeTrust />

      <ScrollLearn />

      <ScrollDiscover />

      <LearningPaths />

      <ToolsCalculatorsPreview />

      <HomeCallToAction />
    </main>
  );
}