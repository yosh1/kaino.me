import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Investments from "@/components/investments"
import Companies from "@/components/companies"
import Designs from "@/components/designs"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Investments />
        <Companies />
        <Designs />
      </main>
      <Footer />
    </div>
  )
}

