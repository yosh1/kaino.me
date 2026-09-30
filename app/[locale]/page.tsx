import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Profile from "@/components/profile"
import Companies from "@/components/companies"
import Designs from "@/components/designs"
import Positions from "@/components/positions"
import Footer from "@/components/footer"
import Press from "@/components/press"

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Companies />
        <Positions />
        <Designs />
        <Press />
      </main>
      <Footer />
    </div>
  );
}
