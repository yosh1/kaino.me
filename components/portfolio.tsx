import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      name: "クリエイティブスタジオ",
      category: "設立企業",
      year: "2018",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "テックスタートアップ",
      category: "投資先",
      year: "2020",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "デザインエージェンシー",
      category: "設立企業",
      year: "2019",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "AIソリューション",
      category: "投資先",
      year: "2021",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "サステナブルブランド",
      category: "設立企業",
      year: "2022",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      name: "フィンテックプラットフォーム",
      category: "投資先",
      year: "2023",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ポートフォリオ</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">設立した企業と投資先のコレクション</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-square w-full overflow-hidden bg-muted">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant={item.category === "設立企業" ? "default" : "secondary"} className="mb-2">
                      {item.category}
                    </Badge>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

