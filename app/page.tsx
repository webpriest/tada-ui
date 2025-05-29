import About from "@/components/Sections/About";
import ContactForm from "@/components/Sections/ContactForm";
import RecentEvs from "@/components/Sections/RecentEvs";
import Slider from "@/components/Sections/Slider";
import Testimonials from "@/components/Sections/Testimonials";
import Vehicles from "@/components/Sections/Vehicles";
import VideoOverlay from "@/components/Sections/VideoOverlay";

export default async function Home() {
  
  return (
    <>
      <Slider />

      <Vehicles />
      
      <About />

      <ContactForm />

      <RecentEvs />

      <VideoOverlay />

      <Testimonials />
    </>
  );
}
