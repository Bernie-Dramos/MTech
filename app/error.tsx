"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-400 mb-4">500</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Algo deu errado!</h2>
        <p className="text-slate-300 mb-8 max-w-md">Ocorreu um erro inesperado. Nossa equipe foi notificada.</p>
        <Button onClick={reset} className="bg-cyan-500 hover:bg-cyan-600 text-white">
          Tentar Novamente
        </Button>
      </div>
    </div>
  )
}
