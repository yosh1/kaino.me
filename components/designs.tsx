import Image from "next/image"
import Link from "next/link"

export default function Designs() {
  const designs = [
    {
      id: 1,
      name: "Slow Rush Coffee",
      year: "2023 - Current",
      description: "Made a cafe in Kamakura, Japan",
      image: "https://www.slowrush.jp/ogp.png",
      tags: ["Development", "Cafe"],
      link: "https://www.slowrush.jp/",
    },
  ];

  return (
    <section id="designs" className="py-20 px-4 border-t border-white/10">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
          Designed Businesses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {designs.map((item) => (
            <Link href={item.link} key={item.id} className="group block" target="_blank" rel="noopener noreferrer">
              <div className="relative aspect-[3/2] w-full overflow-hidden mb-4">
                <Image
                  src={item.image}
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
          ))}
        </div>
      </div>
    </section>
  )
} 