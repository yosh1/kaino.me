import Image from "next/image"
import Link from "next/link"

export default function Companies() {
  const companies = [
    {
      id: 1,
      name: "SKYWARD Inc.",
      year: "2018",
      description: "CTO",
      image: "/img/skyward.png",
      tags: ["Startups", "AI"],
      current: false,
    },
    {
      id: 2,
      name: "Bae8 Inc.",
      year: "2018 - 2019",
      description: "CTO",
      image: "/img/bae8.jpeg",
      tags: ["Startups", "Web3"],
      current: false,
    },
    {
      id: 3,
      name: "newCreator.org",
      year: "2019 - current",
      description: "Founder, Chairman",
      image: "https://newcreator.org/ogp.png",
      tags: ["NPO", "Education"],
      current: true,
    },
    {
      id: 4,
      name: "Preferred Inc.",
      year: "2022 - current",
      description: "Founder, CEO",
      image: "https://www.pref.co.jp/ogp.png",
      tags: ["Venture", "Parallel"],
      current: true,
    },
    {
      id: 5,
      name: "newCreator Inc.",
      year: "2023 - 2024",
      description: "Founder, CEO",
      image: "https://newcreator.jp/ogp.png",
      tags: ["Startups", "AI", "Education"],
      current: false,
    },
    {
      id: 6,
      name: "XTEM Inc.",
      year: "2024 - current",
      description: "Founder, CEO",
      image: "/img/xtem.jpg",
      tags: ["Startups", "AI"],
      current: true,
    },
  ];

  const currentCompanies = companies.filter(company => company.current);
  const pastCompanies = companies.filter(company => !company.current);

  const CompanyCard = ({ item }: { item: typeof companies[0] }) => (
    <Link href="#" className="group block">
      <div className="relative aspect-[3/2] w-full overflow-hidden mb-4">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {item.tags.map((tag, index) => (
          <span key={index} className="inline-block px-2 py-1 text-xs font-mono bg-white/10 text-white/90">
            {tag}
          </span>
        ))}
      </div>

      <div className="mb-1">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <span className="text-xs text-white/60 font-mono">{item.year}</span>
      </div>

      <p className="text-sm text-white/80">{item.description}</p>
    </Link>
  );

  return (
    <section id="companies" className="py-20 px-4 border-t border-white/10">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Founded Companies</h2>
        
        {/* Current Companies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Current</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentCompanies.map((item) => (
              <CompanyCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Past Companies */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Past</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pastCompanies.map((item) => (
              <CompanyCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

