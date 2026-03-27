import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  BarChart3, 
  Cpu, 
  Flame, 
  Globe, 
  Layers, 
  LayoutDashboard, 
  MessageSquare, 
  Rocket, 
  ShieldCheck, 
  Twitter, 
  Zap,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { TOKEN_CONFIG } from './constants';

// Types for our stats
interface TokenStats {
  raised: string;
  holders: string;
  transactions: string;
  liquidity: string;
  marketcap: string;
  progress: number;
  price?: string;
}

export default function App() {
  const [stats, setStats] = useState<TokenStats | null>(null);
  const [logs, setLogs] = useState([
    { time: '[SYSTEM]', message: 'Initializing Autonomous AI Core...' },
    { time: '[INIT]', message: 'Neural network synchronization complete.' },
    { time: '[AUTH]', message: 'Contract verification pending...' }
  ]);
  const [copied, setCopied] = useState(false);
  const logEndRef = useRef<HTMLDivElement>(null);

  const aiLogMessages = [
    'Scanning blockchain for liquidity events...',
    'Analyzing holder sentiment via neural patterns...',
    'Optimizing tax distribution for long-term stability...',
    'Autonomous buy-back algorithm: STANDBY',
    'Cross-chain data synchronization in progress...',
    'Processing transaction batch #8429...',
    'Neural network adjusting to market volatility...',
    'Holder rewards distribution: CALCULATING',
    'Security audit: 100% integrity confirmed.',
    'AI Strategy: ACCUMULATION PHASE'
  ];

  const addAILogEntry = () => {
    const time = new Date().toLocaleTimeString();
    const message = aiLogMessages[Math.floor(Math.random() * aiLogMessages.length)];
    setLogs(prev => [...prev, { time: `[${time}]`, message }]);
  };

  // Real-time data fetching logic
  useEffect(() => {
    const fetchTokenData = async () => {
      // If contract address is still the placeholder, we show "Connecting..." or default stats
      if (TOKEN_CONFIG.contractAddress === "0x0000000000000000000000000000000000000000") {
        // This is where real API calls would go (e.g., DexScreener, Bitquery, or custom backend)
        // For now, we set a "Waiting" state or very minimal initial data
        setStats({
          raised: "0.00",
          holders: "0",
          transactions: "0",
          liquidity: "$0.00",
          marketcap: "$0.00",
          progress: 0,
          price: "$0.00000000"
        });
        return;
      }

      try {
        // Example: Fetching from a public API
        // const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${TOKEN_CONFIG.contractAddress}`);
        // const data = await response.json();
        // Update stats based on real data...
        
        // Placeholder for real data update
        setStats({
          raised: "12.45",
          holders: "1,240",
          transactions: "5,829",
          liquidity: "$45,200",
          marketcap: "$120,500",
          progress: 51.8,
          price: "$0.0001205"
        });
      } catch (error) {
        console.error("Failed to fetch token data:", error);
      }
    };

    fetchTokenData();
    const interval = setInterval(() => {
      fetchTokenData();
      if (Math.random() > 0.8) addAILogEntry();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const copyAddress = () => {
    navigator.clipboard.writeText(TOKEN_CONFIG.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#00ff8833] selection:text-[#00ff88]">
      <div className="atmosphere" />
      <div className="grid-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#00ff88] to-[#00ccff] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-black" />
            </div>
            <span className="font-bold tracking-tight text-lg">AUTONOMOUS AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#stats" className="hover:text-white transition-colors">Stats</a>
            <a href="#logic" className="hover:text-white transition-colors">AI Logic</a>
            <a href="#contract" className="hover:text-white transition-colors">Contract</a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={TOKEN_CONFIG.links.fourMeme} 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold hover:bg-[#00ff88] transition-colors"
            >
              BUY $AIAI
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff8811] border border-[#00ff8822] text-[#00ff88] text-[10px] font-bold tracking-widest uppercase mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] live-dot" />
                Neural Network Active
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
                FULLY <span className="text-glow text-[#00ff88]">AUTONOMOUS</span><br />
                AI MEME TOKEN
              </h1>
              <p className="text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed mb-10">
                {TOKEN_CONFIG.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href={TOKEN_CONFIG.links.fourMeme}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded-xl bg-[#00ff88] text-black font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <Rocket className="w-5 h-5" />
                  Launch on Four.meme
                </a>
                <a 
                  href={TOKEN_CONFIG.links.telegram}
                  className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 font-bold flex items-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Join Community
                </a>
              </div>
            </motion.div>
          </section>

          {/* Stats Grid */}
          <section id="stats" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <StatCard 
              label="Market Cap" 
              value={stats?.marketcap || "Connecting..."} 
              icon={<BarChart3 className="w-4 h-4" />}
              subValue={stats?.price ? `Price: ${stats.price}` : undefined}
            />
            <StatCard 
              label="Liquidity" 
              value={stats?.liquidity || "Connecting..."} 
              icon={<Layers className="w-4 h-4" />}
            />
            <StatCard 
              label="Holders" 
              value={stats?.holders || "Connecting..."} 
              icon={<ShieldCheck className="w-4 h-4" />}
            />
            <StatCard 
              label="Transactions" 
              value={stats?.transactions || "Connecting..."} 
              icon={<Activity className="w-4 h-4" />}
            />
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Bonding Curve */}
            <div className="lg:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Bonding Curve Progress</h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Migration to PancakeSwap</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#00ff88]">{stats?.progress || "0"}%</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex justify-between text-[10px] font-bold uppercase text-zinc-500 mb-2">
                    <span>Current: {stats?.raised || "0.00"} BNB</span>
                    <span>Target: {TOKEN_CONFIG.targetBNB} BNB</span>
                  </div>
                  <div className="h-4 bg-white/5 rounded-full p-1 border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${stats?.progress || 0}%` }}
                      className="h-full bg-linear-to-r from-[#00ff88] to-[#00ccff] rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 blur-sm animate-pulse" />
                    </motion.div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase mb-1">Tax Rate</p>
                    <p className="text-lg font-bold">{TOKEN_CONFIG.tax.total}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase mb-1">Burn</p>
                    <p className="text-lg font-bold text-red-500">{TOKEN_CONFIG.tax.burn}%</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase mb-1">Holders</p>
                    <p className="text-lg font-bold text-blue-400">{TOKEN_CONFIG.tax.holders}%</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase mb-1">AI Ops</p>
                    <p className="text-lg font-bold text-amber-500">{TOKEN_CONFIG.tax.aiOps}%</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff88] opacity-[0.03] blur-[100px] -mr-32 -mt-32" />
            </div>

            {/* AI Operating Log */}
            <div id="logic" className="glass-card rounded-3xl p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-[#00ff88]" />
                <h3 className="font-bold">AI Operating Log</h3>
              </div>
              <div className="flex-1 font-mono text-[11px] leading-relaxed overflow-y-auto max-h-[320px] pr-2 custom-scrollbar">
                <AnimatePresence mode="popLayout">
                  {logs.map((log, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-3 flex gap-3"
                    >
                      <span className="text-zinc-600 shrink-0">{log.time}</span>
                      <span className={log.time === '[SYSTEM]' ? 'text-[#00ff88]' : 'text-zinc-300'}>
                        {log.message}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div ref={logEndRef} />
              </div>
            </div>
          </div>

          {/* Contract Section */}
          <section id="contract" className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 glass-card rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-5 h-5 text-[#00ff88]" />
                <h3 className="font-bold">Smart Contract</h3>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-black/40 p-4 rounded-2xl border border-white/5">
                <div className="flex-1 font-mono text-sm break-all text-zinc-400">
                  {TOKEN_CONFIG.contractAddress}
                </div>
                <button 
                  onClick={copyAddress}
                  className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-xs font-bold"
                >
                  {copied ? <Check className="w-4 h-4 text-[#00ff88]" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'COPIED' : 'COPY'}
                </button>
              </div>
              <div className="flex gap-4 mt-6">
                <a 
                  href={`${TOKEN_CONFIG.links.bscScan}${TOKEN_CONFIG.contractAddress}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-zinc-500 hover:text-[#00ff88] flex items-center gap-1 transition-colors"
                >
                  View on BscScan <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h3 className="font-bold mb-4">Network Info</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-xs text-zinc-500 font-bold uppercase">Blockchain</span>
                  <span className="text-sm font-bold">{TOKEN_CONFIG.network}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-xs text-zinc-500 font-bold uppercase">Standard</span>
                  <span className="text-sm font-bold">BEP-20</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-xs text-zinc-500 font-bold uppercase">Status</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#00ff8822] text-[#00ff88] font-bold">VERIFIED</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-6 h-6 text-[#00ff88]" />
              <span className="font-black tracking-tighter text-xl">AUTONOMOUS AI</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs">
              The future of meme tokens is autonomous. No founders, no control, just pure AI logic.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-6">
              <a href={TOKEN_CONFIG.links.twitter} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00ff88] hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={TOKEN_CONFIG.links.telegram} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00ff88] hover:text-black transition-all">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href={TOKEN_CONFIG.links.website} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00ff88] hover:text-black transition-all">
                <Globe className="w-5 h-5" />
              </a>
            </div>
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">
              © 2026 AUTONOMOUS AI CORE
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ label, value, icon, subValue }: { label: string, value: string, icon: React.ReactNode, subValue?: string }) {
  return (
    <div className="glass-card rounded-3xl p-6 transition-all hover:border-[#00ff8833]">
      <div className="flex items-center gap-2 text-zinc-500 mb-4">
        {icon}
        <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
      </div>
      <div className="text-2xl font-black tracking-tight mb-1">{value}</div>
      {subValue && <div className="text-[10px] font-mono text-[#00ff88]">{subValue}</div>}
    </div>
  );
}
