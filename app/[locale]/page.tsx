import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Companies from "@/components/companies"
import Designs from "@/components/designs"
import Press from "@/components/press"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="px-5 pt-16 md:px-8 md:pt-20">
        <div className="mx-auto max-w-5xl md:pl-40">
          <Hero />
          <Companies />
          <Designs />
          <Press />
        </div>
      </main>
      <Footer />
    </div>
  )
}
