import About from "@/components/Sections/About";
import ContactForm from "@/components/Sections/Contact/ContactForm";
import RecentEvs from "@/components/Sections/RecentEvs";
import Slider from "@/components/Sections/Slider";
import Testimonials from "@/components/Sections/Testimonials";
import Vehicles from "@/components/Sections/Vehicle/Vehicles";
import Faqs from "@/components/Sections/Faqs";

export default async function Home() {
  
  return (
    <>
      <Slider />

      <Vehicles />
      
      <About />

      <ContactForm />

      <RecentEvs />

      <Faqs />

      <Testimonials />
    </>
  );
}
