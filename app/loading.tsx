export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl font-bold mb-8">
          <span className="text-white">Moz</span>
          <span className="text-cyan-400">Tech</span>
        </div>
        <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    </div>
  )
}
