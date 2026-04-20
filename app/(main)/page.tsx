import Hero from "@/components/Hero";
import About from "@/components/About";
import Apartment from "@/components/Apartment";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import HouseRules from "@/components/HouseRules";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Apartment />
      <Gallery />
      <Location />
      <Reviews />
      <HouseRules />
      <Booking />
      <Contact />
    </>
  );
}
