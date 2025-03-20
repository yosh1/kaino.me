import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brush, Code, Lightbulb } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">私について</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              デザインとビジネスの交差点で活動するクリエイティブ起業家
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 max-w-5xl">
            <Card>
              <CardHeader className="pb-2">
                <div className="mx-auto mb-2 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                  <Brush className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">デザイン思考</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  ユーザー中心のデザイン思考を活用して、革新的なビジネスソリューションを生み出します。
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="mx-auto mb-2 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">起業家精神</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  市場の隙間を見つけ、革新的なビジネスモデルを構築し、持続可能な成長を実現します。
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="mx-auto mb-2 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">テクノロジー</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  最新のテクノロジーを活用して、未来を形作る革新的なソリューションを開発します。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

