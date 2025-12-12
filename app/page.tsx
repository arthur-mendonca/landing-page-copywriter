import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Modules from "./components/Modules";


export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Hero />
      <Bio />
      <Modules />
      <Footer />
    </main>
  );
}
