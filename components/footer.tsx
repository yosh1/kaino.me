export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60 font-mono">
            © {new Date().getFullYear()} Yoshihisa Kaino. All rights reserved.
          </p>

          <p className="text-sm text-white/60 font-mono">Design & Code by Yoshihisa Kaino</p>
        </div>
      </div>
    </footer>
  )
}

