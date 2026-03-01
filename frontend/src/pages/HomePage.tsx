import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import AddOns from '../components/AddOns';
import MoreThanMusic from '../components/MoreThanMusic';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import SEOSection from '../components/SEOSection';
import BookingForm from '../components/BookingForm';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <AddOns />
      <MoreThanMusic />
      <Gallery />
      <Testimonials />
      <SEOSection />
      <BookingForm />
    </main>
  );
}
