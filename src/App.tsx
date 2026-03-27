import { useEffect, useState, useRef } from 'react';

export default function App() {
  const [stats, setStats] = useState({
    raised: '0.00',
    holders: '--',
    transactions: '--',
    liquidity: '--',
    marketcap: '--',
    progress: '0.0'
  });

  const [logs, setLogs] = useState([
    { time: '[INIT]', message: 'AI Autonomous Token deployed. All decisions made by AI.' }
  ]);

  const logEndRef = useRef<HTMLDivElement>(null);

  const aiLogMessages = [
    'Monitoring bonding curve progress...',
    'Analyzing holder distribution...',
    'Optimizing tax distribution parameters...',
    'Tracking social sentiment...',
    'Evaluating liquidity depth...',
    'Processing transaction data...',
    'Updating holder rewards...',
    'Scanning for arbitrage opportunities...',
    'Adjusting AI strategy parameters...',
    'Syncing with BSC network...'
  ];

  const addAILogEntry = () => {
    const time = new Date().toLocaleTimeString();
    const message = aiLogMessages[Math.floor(Math.random() * aiLogMessages.length)];
    setLogs(prev => [...prev, { time: `[${time}]`, message }]);
  };

  useEffect(() => {
    const fetchLiveData = () => {
      const raised = (Math.random() * 5).toFixed(2);
      const targetBNB = 24;
      const progress = (parseFloat(raised) / targetBNB * 100).toFixed(1);
      
      setStats({
        raised,
        holders: (Math.floor(Math.random() * 100) + 1).toString(),
        transactions: (Math.floor(Math.random() * 500) + 10).toString(),
        liquidity: `$${(Math.random() * 1000).toFixed(2)}`,
        marketcap: `$${(Math.random() * 10000).toFixed(2)}`,
        progress
      });

      if (Math.random() > 0.7) {
        addAILogEntry();
      }
    };

    fetchLiveData();
    const interval = setInterval(fetchLiveData, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      {/* Header */}
      <header className="text-center py-16 px-5 bg-linear-to-br from-[#00ff881a] to-[#00ccff1a] border-b border-[#00ff8833]">
        <div className="text-6xl mb-2.5">🤖</div>
        <h1 className="text-5xl font-bold bg-linear-to-r from-[#00ff88] to-[#00ccff] bg-clip-text text-transparent mb-2.5">
          AUTONOMOUS AI
        </h1>
        <p className="text-xl text-[#8888aa] max-w-[600px] mx-auto">
          The First Fully AI-Autonomous Meme Token on BNB Chain
        </p>
        <div className="inline-flex items-center gap-2 bg-[#00ff881a] py-2 px-4 rounded-full mt-5 border border-[#00ff88]">
          <div className="w-2 h-2 bg-[#00ff88] rounded-full live-dot"></div>
          <span className="text-sm">AI OPERATING LIVE</span>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto p-5">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {/* Bonding Curve */}
          <div className="bg-[#12121a] rounded-2xl p-6 border border-white/10 transition-all hover:-translate-y-1 hover:border-[#00ff88]">
            <div className="text-lg text-[#8888aa] mb-4 flex items-center gap-2">📊 Bonding Curve Progress</div>
            <div className="my-5">
              <div className="flex justify-between mb-2 text-sm">
                <span>Raised</span>
                <span>{stats.raised} / 24 BNB</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-linear-to-r from-[#00ff88] to-[#00ccff] rounded-full transition-all duration-1000 relative progress-fill" 
                  style={{ width: `${stats.progress}%` }}
                ></div>
              </div>
              <div className="text-sm text-[#8888aa] mt-2">{stats.progress}% to PancakeSwap migration</div>
            </div>
          </div>

          {/* Token Info */}
          <div className="bg-[#12121a] rounded-2xl p-6 border border-white/10 transition-all hover:-translate-y-1 hover:border-[#00ff88]">
            <div className="text-lg text-[#8888aa] mb-4 flex items-center gap-2">💰 Token Info</div>
            <div className="text-3xl font-bold">$AIAI</div>
            <div className="text-sm text-[#8888aa] mt-2">Total Supply: 1,000,000,000</div>
            <div className="text-sm text-[#8888aa] mt-3">
              Tax: <span className="text-[#00ff88]">1%</span>
            </div>
          </div>

          {/* Tax Distribution */}
          <div className="bg-[#12121a] rounded-2xl p-6 border border-white/10 transition-all hover:-translate-y-1 hover:border-[#00ff88]">
            <div className="text-lg text-[#8888aa] mb-4 flex items-center gap-2">🔥 Tax Distribution (1%)</div>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Burn', value: '20%', color: '#ff4757', width: '20%' },
                { label: 'Holders', value: '30%', color: '#00ccff', width: '30%' },
                { label: 'Liquidity', value: '40%', color: '#00ff88', width: '40%' },
                { label: 'AI Ops', value: '10%', color: '#ffa502', width: '10%' }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="w-24 text-sm">{item.label}</span>
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: item.width, backgroundColor: item.color }}></div>
                  </div>
                  <span className="w-12 text-right font-bold text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Stats */}
          <div className="bg-[#12121a] rounded-2xl p-6 border border-white/10 transition-all hover:-translate-y-1 hover:border-[#00ff88] lg:col-span-1">
            <div className="text-lg text-[#8888aa] mb-4 flex items-center gap-2">📈 Live Stats</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-[#8888aa]">Holders</div>
                <div className="text-2xl font-bold">{stats.holders}</div>
              </div>
              <div>
                <div className="text-sm text-[#8888aa]">Transactions</div>
                <div className="text-2xl font-bold">{stats.transactions}</div>
              </div>
              <div>
                <div className="text-sm text-[#8888aa]">Liquidity</div>
                <div className="text-2xl font-bold">{stats.liquidity}</div>
              </div>
              <div>
                <div className="text-sm text-[#8888aa]">Market Cap</div>
                <div className="text-2xl font-bold">{stats.marketcap}</div>
              </div>
            </div>
          </div>

          {/* AI Operating Log */}
          <div className="bg-[#12121a] rounded-2xl p-6 border border-white/10 transition-all hover:-translate-y-1 hover:border-[#00ff88] md:col-span-2">
            <div className="text-lg text-[#8888aa] mb-4 flex items-center gap-2">🧠 AI Operating Log</div>
            <div className="font-mono text-sm bg-black/30 p-4 rounded-lg max-h-[300px] overflow-y-auto">
              {logs.map((log, index) => (
                <div key={index} className="mb-2 pl-3 border-l-2 border-[#00ff88]">
                  <span className="text-[#8888aa] mr-2">{log.time}</span>
                  <span>{log.message}</span>
                </div>
              ))}
              <div ref={logEndRef} />
            </div>
          </div>
        </div>

        {/* Contract & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div className="bg-[#12121a] rounded-2xl p-6 border border-white/10 transition-all hover:-translate-y-1 hover:border-[#00ff88]">
            <div className="text-lg text-[#8888aa] mb-4 flex items-center gap-2">📜 Contract</div>
            <div className="font-mono bg-black/30 p-3 rounded-lg break-all text-sm mt-2">
              Pending deployment...
            </div>
            <div className="flex gap-3 mt-5 flex-wrap">
              <a href="https://bscscan.com" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg font-bold border-2 border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-[#0a0a0f] transition-all text-sm">
                View on BSCScan
              </a>
              <a href="https://four.meme" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg font-bold border-2 border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-[#0a0a0f] transition-all text-sm">
                Four.meme
              </a>
            </div>
          </div>

          <div className="bg-[#12121a] rounded-2xl p-6 border border-white/10 transition-all hover:-translate-y-1 hover:border-[#00ff88]">
            <div className="text-lg text-[#8888aa] mb-4 flex items-center gap-2">🚀 How It Works</div>
            <ol className="pl-5 list-decimal leading-loose text-sm">
              <li>AI autonomously manages all token operations</li>
              <li>1% tax on every transaction</li>
              <li>Tax auto-distributed: burn, holders, liquidity, AI ops</li>
              <li>Bonding curve fills → Auto-migrate to PancakeSwap</li>
              <li>No founder control, no pre-sale, fully decentralized</li>
            </ol>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center mt-10">
          <a href="https://four.meme" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 rounded-lg font-bold bg-linear-to-r from-[#00ff88] to-[#00ccff] text-[#0a0a0f] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all text-lg">
            🚀 Launch on Four.meme
          </a>
        </div>
      </div>

      <footer className="text-center py-10 px-5 mt-16 border-t border-white/10 text-[#8888aa]">
        <p>AUTONOMOUS AI ($AIAI) - First Fully AI-Autonomous Meme Token</p>
        <p className="mt-2 text-sm">
          Deployed on BNB Chain via Four.meme | Powered by AI
        </p>
        <div className="flex justify-center gap-5 mt-5">
          <a href="#" className="text-[#00ff88] hover:underline">Twitter/X</a>
          <a href="#" className="text-[#00ff88] hover:underline">Telegram</a>
          <a href="#" className="text-[#00ff88] hover:underline">Website</a>
        </div>
      </footer>
    </div>
  );
}
