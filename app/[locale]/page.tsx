import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Investments from "@/components/investments"
import Companies from "@/components/companies"
import Designs from "@/components/designs"
import Footer from "@/components/footer"
import Press from "@/components/press"

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main>
        <Hero />
        <Companies />
        <Investments />
        <Designs />
        <Press />
      </main>
      <Footer />
    </div>
  );
}
