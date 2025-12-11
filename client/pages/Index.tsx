import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import PixSection from "@/components/PixSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <StorySection />
      <PixSection />
      <Footer />
    </div>
  );
}
