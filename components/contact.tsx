import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">お問い合わせ</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              ビジネスの相談、投資の機会、コラボレーションについてお気軽にご連絡ください。
            </p>
          </div>

          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>メッセージを送る</CardTitle>
              <CardDescription>24時間以内にご返信いたします。</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="お名前" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="メールアドレス" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="メッセージ" className="min-h-[120px]" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">送信</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

