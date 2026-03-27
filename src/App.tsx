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
  Check,
  Terminal,
  Shield,
  Users,
  ArrowUpRight
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
  price: string;
}

interface AILog {
  id: number;
  timestamp: string;
  message: string;
  type: 'info' | 'warning';
}

const NeuralBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      <svg width="100%" height="100%" className="w-full h-full">
        <pattern id="neural-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="rgba(0, 255, 136, 0.3)" />
          <line x1="2" y1="2" x2="100" y2="100" stroke="rgba(0, 255, 136, 0.05)" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#neural-pattern)" />
      </svg>
    </div>
  );
};

export default function App() {
  const [stats, setStats] = useState<TokenStats | null>(null);
  const [logs, setLogs] = useState<AILog[]>([
    { id: 1, timestamp: new Date().toLocaleTimeString(), message: "Neural link established. System online.", type: 'info' },
    { id: 2, timestamp: new Date().toLocaleTimeString(), message: "Scanning BNB Chain for autonomous liquidity signals...", type: 'info' },
    { id: 3, timestamp: new Date().toLocaleTimeString(), message: "USD1 Liquidity Pool synchronization complete.", type: 'info' },
    { id: 4, timestamp: new Date().toLocaleTimeString(), message: "AI Intelligence Module v2.4.0 loaded successfully.", type: 'info' },
    { id: 5, timestamp: new Date().toLocaleTimeString(), message: "Sentiment analysis: Extreme positive momentum detected.", type: 'info' }
  ]);
  const [copied, setCopied] = useState(false);
  const [bootSequence, setBootSequence] = useState(true);
  const logContainerRef = useRef<HTMLDivElement>(null);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setBootSequence(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const addAILogEntry = () => {
    const actions = [
      "Analyzing liquidity depth...",
      "Optimizing neural weights...",
      "Scanning social sentiment...",
      "Executing autonomous buy-back...",
      "Adjusting market volatility parameters...",
      "Syncing with BNB Chain nodes...",
      "Recalculating bonding curve trajectory...",
      "Neural network self-correction initiated..."
    ];
    const newLog: AILog = {
      id: Date.now(),
      timestamp: new Date().toLocaleTimeString(),
      message: actions[Math.floor(Math.random() * actions.length)],
      type: Math.random() > 0.7 ? 'warning' : 'info'
    };
    setLogs(prev => [...prev.slice(-19), newLog]);
  };

  // Real-time data fetching logic
  useEffect(() => {
    const fetchTokenData = async () => {
      // If contract address is still the placeholder, we show default stats
      if (TOKEN_CONFIG.contractAddress === "0x0000000000000000000000000000000000000000") {
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
        // Using the Four.meme API endpoint provided by the user
        const response = await fetch(`https://four.meme/meme-api/v1/private/token/get?address=${TOKEN_CONFIG.contractAddress}`);
        const result = await response.json();
        
        if (result && result.data) {
          const tokenData = result.data;
          const priceData = tokenData.tokenPrice || {};
          
          setStats({
            raised: tokenData.funds || "0.00",
            holders: priceData.holderCount?.toString() || "0",
            transactions: priceData.txCount?.toString() || "0", // Assuming txCount exists or using a fallback
            liquidity: `$${parseFloat(priceData.marketCap || "0").toLocaleString()}`, // Using marketCap as a proxy for liquidity/value if direct liquidity isn't available
            marketcap: `$${parseFloat(priceData.marketCap || "0").toLocaleString()}`,
            progress: parseFloat(tokenData.progress || "0") * 100, // API usually returns 0-1
            price: `$${parseFloat(priceData.amount || "0").toFixed(8)}`
          });
        }
      } catch (error) {
        console.error("Failed to fetch token data from Four.meme:", error);
      }
    };

    fetchTokenData();
    const interval = setInterval(() => {
      fetchTokenData();
      if (Math.random() > 0.4) addAILogEntry();
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const copyAddress = () => {
    navigator.clipboard.writeText(TOKEN_CONFIG.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (bootSequence) {
    return (
      <div className="min-h-screen bg-[#050507] flex items-center justify-center font-mono">
        <div className="text-[#00ff88] text-xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-4xl font-black mb-4 tracking-tighter">BINANCE AI PRO</div>
            <div className="text-sm opacity-50">
              SYSTEM_INITIALIZING...<br />
              LOADING_NEURAL_CORES...<br />
              ESTABLISHING_AUTONOMOUS_PROTOCOL...
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans selection:bg-[#00ff8833] selection:text-[#00ff88] overflow-x-hidden">
      <div className="atmosphere" />
      <div className="grid-overlay" />
      <div className="scanline" />
      <div className="noise-overlay" />
      <NeuralBackground />

      {/* System Status Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-white/5 flex">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-full bg-linear-to-r from-[#00ff88] via-[#00ccff] to-[#00ff88]"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#00ff88] to-[#00ccff] flex items-center justify-center cyber-border">
              <Cpu className="w-5 h-5 text-black" />
            </div>
            <span className="font-bold tracking-tighter text-lg text-glow">AUTONOMOUS AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            <a href="#stats" className="hover:text-[#00ff88] transition-colors">Network_Stats</a>
            <a href="#logic" className="hover:text-[#00ff88] transition-colors">Neural_Logic</a>
            <a href="#contract" className="hover:text-[#00ff88] transition-colors">Protocol_Addr</a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={TOKEN_CONFIG.links.fourMeme} 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-2 rounded-sm bg-[#00ff88] text-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all hover:scale-105 active:scale-95"
            >
              INITIALIZE_TRADE
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ff8808] border border-[#00ff8815] text-[#00ff88] text-[10px] font-bold tracking-[0.2em] uppercase mb-8 cyber-border">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] live-dot shadow-[0_0_10px_#00ff88]" />
              Autonomous Protocol Active
            </div>
            <h1 className="text-7xl md:text-[120px] font-black tracking-tighter mb-8 leading-[0.85] uppercase">
              <span className="glitch block" data-text="FULLY">FULLY</span>
              <span className="text-glow text-[#00ff88] glitch" data-text="AUTONOMOUS">AUTONOMOUS</span><br />
              <span className="text-4xl md:text-6xl opacity-50">AI MEME PROTOCOL</span>
            </h1>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed mb-12 border-l-2 border-[#00ff8822] pl-8 text-left italic">
              {TOKEN_CONFIG.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href={TOKEN_CONFIG.links.fourMeme}
                target="_blank"
                rel="noreferrer"
                className="group relative px-10 py-5 rounded-xl bg-white text-black font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-[#00ff88] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Access Terminal <ArrowUpRight className="w-5 h-5" />
                </span>
              </a>
              <a 
                href={TOKEN_CONFIG.links.telegram}
                target="_blank"
                rel="noreferrer"
                className="px-10 py-5 rounded-xl bg-white/5 border border-white/10 font-black uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Join Neural Link
              </a>
            </div>
          </motion.div>
        </section>

        {/* Stats Grid */}
        <section id="stats" className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <StatCard label="Current_Value" value={stats?.price || "$0.00"} icon={<Zap className="w-4 h-4" />} />
            <StatCard label="Market_Cap" value={stats?.marketcap || "$0.00"} icon={<Activity className="w-4 h-4" />} />
            <StatCard label="Neural_Nodes" value={stats?.holders || "0"} icon={<Users className="w-4 h-4" />} />
            <StatCard label="Liquidity_Pool" value={stats?.liquidity || "$0.00"} icon={<Shield className="w-4 h-4" />} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Bonding Curve */}
            <div className="lg:col-span-2 glass-card rounded-3xl p-10 relative overflow-hidden cyber-border">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Cpu className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h3 className="text-2xl font-black mb-1 uppercase tracking-tighter">Neural Migration Progress</h3>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold">Protocol: PancakeSwap V3 Deployment</p>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-black text-[#00ff88] text-glow">{stats?.progress.toFixed(2) || "0.00"}%</span>
                  </div>
                </div>
                
                <div className="mb-10">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3">
                    <span>Accumulated: {stats?.raised || "0.00"} BNB</span>
                    <span>Threshold: {TOKEN_CONFIG.targetBNB} BNB</span>
                  </div>
                  <div className="h-6 bg-white/5 rounded-full p-1.5 border border-white/5 overflow-hidden shimmer">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${stats?.progress || 0}%` }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="h-full bg-linear-to-r from-[#00ff88] via-[#00ccff] to-[#00ff88] rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 blur-sm animate-pulse" />
                    </motion.div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-[9px] text-zinc-500 uppercase font-bold mb-1">Burn_Protocol</p>
                    <p className="text-base font-bold text-red-500">{TOKEN_CONFIG.tax.burn}%</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-[9px] text-zinc-500 uppercase font-bold mb-1">Holders_Reward</p>
                    <p className="text-base font-bold text-blue-400">{TOKEN_CONFIG.tax.holders}%</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-[9px] text-zinc-500 uppercase font-bold mb-1">Liquidity_Pool</p>
                    <p className="text-base font-bold text-[#00ff88]">{TOKEN_CONFIG.tax.liquidity}%</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-[9px] text-zinc-500 uppercase font-bold mb-1">AI_Operations</p>
                    <p className="text-base font-bold text-amber-500">{TOKEN_CONFIG.tax.aiOps}%</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-6 mt-4 border-t border-white/5">
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Total_Supply</p>
                    <p className="text-lg font-bold">{TOKEN_CONFIG.totalSupply}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Tax_Protocol</p>
                    <p className="text-lg font-bold">{TOKEN_CONFIG.tax.total}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Network</p>
                    <p className="text-lg font-bold text-[#00ccff]">{TOKEN_CONFIG.network}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Logs */}
            <div id="logic" className="glass-card rounded-3xl p-8 flex flex-col h-[450px] cyber-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#00ff88]" />
                  Neural_Stream
                </h3>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                </div>
              </div>
              <div ref={logContainerRef} className="flex-1 overflow-y-auto space-y-3 font-mono text-[10px] custom-scrollbar pr-2">
                {logs.length === 0 && (
                  <div className="text-zinc-600 italic">Initializing neural link...</div>
                )}
                {logs.map((log) => (
                  <motion.div 
                    key={log.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex gap-3 ${log.type === 'warning' ? 'text-yellow-400/80' : 'text-zinc-400'}`}
                  >
                    <span className="opacity-30 shrink-0">[{log.timestamp}]</span>
                    <span className="break-words leading-relaxed">{log.message}</span>
                  </motion.div>
                ))}
                <div ref={logEndRef} />
              </div>
            </div>
          </div>
        </section>

        {/* AI Intelligence Modules */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <IntelligenceCard 
              title="Sentiment Analysis" 
              value="98.4%" 
              status="Bullish" 
              desc="Neural processing of global social data streams indicates extreme positive momentum."
            />
            <IntelligenceCard 
              title="Liquidity Depth" 
              value="Optimized" 
              status="Stable" 
              desc="Autonomous rebalancing of USD1 pool to maintain minimum slippage for all participants."
            />
            <IntelligenceCard 
              title="Neural Weights" 
              value="v2.4.0" 
              status="Active" 
              desc="Self-learning algorithms adjusting market dynamics based on real-time trade volume."
            />
          </div>
        </section>

        {/* Contract Section */}
        <section id="contract" className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-3xl p-10 text-center relative overflow-hidden cyber-border">
            <div className="absolute inset-0 bg-linear-to-b from-[#00ff8805] to-transparent pointer-events-none" />
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">Autonomous Protocol Address</h2>
            <p className="text-zinc-500 mb-8 text-sm uppercase tracking-widest font-bold">Verified Smart Contract on BNB Chain</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="bg-black/40 border border-white/5 px-8 py-4 rounded-xl font-mono text-sm md:text-lg break-all flex items-center gap-4 group">
                <span className="text-zinc-400 group-hover:text-white transition-colors">
                  {TOKEN_CONFIG.contractAddress}
                </span>
                <button 
                  onClick={copyAddress}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-[#00ff88]"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
              <a 
                href={TOKEN_CONFIG.links.bscScan}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 font-bold uppercase text-xs tracking-widest"
              >
                View Explorer <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 relative z-10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Cpu className="w-6 h-6 text-[#00ff88]" />
            <span className="font-black tracking-tighter text-xl uppercase">AUTONOMOUS AI</span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
            <a href={TOKEN_CONFIG.links.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter_X</a>
            <a href={TOKEN_CONFIG.links.telegram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Telegram_Comm</a>
            <a href={TOKEN_CONFIG.links.fourMeme} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Four_Meme</a>
          </div>
          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
            © 2026 Autonomous Protocol. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="glass-card rounded-2xl p-6 cyber-border">
      <div className="flex items-center gap-2 text-zinc-500 mb-3">
        <div className="p-1.5 rounded-lg bg-white/5">
          {icon}
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
      </div>
      <div className="text-2xl font-black tracking-tighter">{value}</div>
    </div>
  );
}

function IntelligenceCard({ title, value, status, desc }: { title: string; value: string; status: string; desc: string }) {
  return (
    <div className="glass-card rounded-2xl p-8 cyber-border group">
      <div className="flex justify-between items-start mb-6">
        <h4 className="text-xs font-black uppercase tracking-widest text-[#00ff88]">{title}</h4>
        <div className="px-2 py-1 rounded bg-[#00ff8810] text-[#00ff88] text-[8px] font-bold uppercase tracking-widest">
          {status}
        </div>
      </div>
      <div className="text-4xl font-black mb-4 tracking-tighter group-hover:text-[#00ccff] transition-colors">{value}</div>
      <p className="text-xs text-zinc-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}
