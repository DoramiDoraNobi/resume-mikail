export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 px-6 md:px-12 lg:px-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Name */}
        <div className="text-xl font-medium tracking-tight text-zinc-100">
          Mikail <span className="text-zinc-500 italic">Yuddha.</span>
        </div>

        {/* Copyright */}
        <div className="text-zinc-500 text-sm">
          &copy; {year} Mikail Yuddha Wibowo. All rights reserved.
        </div>

        {/* Status */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-400 text-sm">All systems operational</span>
        </div>

      </div>
    </footer>
  );
}
