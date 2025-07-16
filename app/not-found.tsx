import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Página Não Encontrada</h2>
        <p className="text-slate-300 mb-8 max-w-md">A página que você está procurando não existe ou foi movida.</p>
        <Link href="/">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">Voltar ao Início</Button>
        </Link>
      </div>
    </div>
  )
}
