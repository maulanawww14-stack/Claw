import React, { useState } from 'react';
import { useUserStore } from '../../../container/app/userStore';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { tradingService } from '../../../services/tradingService';
import { 
  Cpu, 
  Network, 
  Activity, 
  ShieldCheck, 
  TrendingUp, 
  Wallet, 
  Bitcoin,
  ArrowRightLeft
} from 'lucide-react';
import { TextStyle, Grid, Button, Badge, Divider, Loader } from '../../../components';

const DashboardPage: React.FC = () => {
  const { user } = useUserStore();
  const queryClient = useQueryClient();
  const [tradeAction, setTradeAction] = useState<'buy' | 'sell'>('buy');
  const [tradeSymbol, setTradeSymbol] = useState('BTC/USDT');
  const [tradeAmount, setTradeAmount] = useState('0.001');

  // Fetch Real-time Trading Data
  const { data: tradingState, isLoading } = useQuery({
    queryKey: ['trading-status'],
    queryFn: tradingService.getStatus,
    refetchInterval: 5000, // Refresh every 5 seconds
  });

  // Mutation for executing trades
  const tradeMutation = useMutation({
    mutationFn: (vars: { action: 'buy' | 'sell', symbol: string, amount: number }) => 
        tradingService.executeTrade(vars.action, vars.symbol, vars.amount),
    onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['trading-status'] });
        alert(`PROTOCOL_SUCCESS: ${data.message}`);
    },
    onError: (error: any) => {
        alert(`PROTOCOL_ERROR: ${error.message}`);
    }
  });

  const handleExecute = () => {
      tradeMutation.mutate({
          action: tradeAction,
          symbol: tradeSymbol,
          amount: parseFloat(tradeAmount)
      });
  };

  if (isLoading) return <div className="flex h-screen items-center justify-center"><Loader size="lg" /></div>;

  return (
    <div className="space-y-8 font-mono">
      <header className="border-l-8 border-[#ff5f00] pl-6">
        <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 mb-1 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
          SYSTEM_MONITOR // CRYPTO_BRIDGE_ACTIVE
        </div>
        <h1 className="text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">COMMAND_CENTER</h1>
        <p className="text-sm text-[#ff5f00] font-bold mt-1 uppercase tracking-widest leading-none">OPERATOR_ID: {user?.username}</p>
      </header>

      {/* Financial Overview */}
      <Grid cols={3} gap={4}>
         <div className="p-8 border-4 border-slate-900 dark:border-slate-800 bg-[#ff5f00] text-white shadow-[8px_8px_0_0_#000]">
            <div className="flex justify-between items-start mb-6">
               <p className="text-[9px] font-black opacity-70 tracking-[0.2em] uppercase">AVAIL_BALANCE_USDT</p>
               <Wallet size={16} />
            </div>
            <div className="text-5xl font-black tabular-nums tracking-tighter">
                ${tradingState?.balance_usdt.toFixed(2)}
            </div>
         </div>

         <div className="p-8 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900">
            <p className="text-[9px] font-black text-slate-400 mb-4 tracking-[0.2em] uppercase">ACTIVE_POSITIONS</p>
            <div className="space-y-3">
               {Object.entries(tradingState?.positions || {}).map(([symbol, amount]) => (
                  <div key={symbol} className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-800 pb-2">
                     <span className="text-xs font-black text-slate-900 dark:text-white uppercase flex items-center gap-2">
                        <Bitcoin size={14} className="text-amber-500" /> {symbol.split('/')[0]}
                     </span>
                     <span className="text-sm font-bold text-slate-600 dark:text-slate-400 tabular-nums">{amount}</span>
                  </div>
               ))}
               {Object.keys(tradingState?.positions || {}).length === 0 && (
                  <p className="text-[10px] text-slate-400 italic">NO_ACTIVE_POSITIONS</p>
               )}
            </div>
         </div>

         <div className="p-8 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-center">
            <TextStyle variant="caption" className="text-slate-400 mb-2">SYSTEM_HEALTH</TextStyle>
            <div className="flex items-center gap-4">
               <div className="flex-1 space-y-1">
                  <div className="flex justify-between text-[8px] font-black uppercase">
                     <span>CPU_LATENCY</span>
                     <span>12ms</span>
                  </div>
                  <div className="h-1 bg-slate-100 dark:bg-slate-800"><div className="w-[12%] h-full bg-blue-500" /></div>
               </div>
               <div className="flex-1 space-y-1">
                  <div className="flex justify-between text-[8px] font-black uppercase">
                     <span>API_STATUS</span>
                     <span className="text-emerald-500">SYNCED</span>
                  </div>
                  <div className="h-1 bg-slate-100 dark:bg-slate-800"><div className="w-[100%] h-full bg-emerald-500" /></div>
               </div>
            </div>
         </div>
      </Grid>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trading Terminal */}
        <div className="lg:col-span-2 p-10 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[12px_12px_0_0_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-3 mb-10 pb-4 border-b-2 border-slate-200 dark:border-slate-800">
              <ArrowRightLeft size={20} className="text-[#ff5f00]" />
              <h2 className="text-xl font-black uppercase tracking-tighter">TRADE_EXECUTION_GATE</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="space-y-6">
                  <div className="flex border-2 border-slate-900 dark:border-slate-800">
                     <button 
                       onClick={() => setTradeAction('buy')}
                       className={`flex-1 py-3 text-xs font-black uppercase transition-all ${tradeAction === 'buy' ? 'bg-emerald-600 text-white' : 'bg-transparent text-slate-500'}`}
                     >
                       // BUY_SIGNAL
                     </button>
                     <button 
                       onClick={() => setTradeAction('sell')}
                       className={`flex-1 py-3 text-xs font-black uppercase transition-all ${tradeAction === 'sell' ? 'bg-red-600 text-white' : 'bg-transparent text-slate-500'}`}
                     >
                       // SELL_SIGNAL
                     </button>
                  </div>

                  <div className="space-y-1">
                     <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">// SELECT_SYMBOL</span>
                     <select 
                       value={tradeSymbol} 
                       onChange={(e) => setTradeSymbol(e.target.value)}
                       className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 outline-none focus:border-[#ff5f00] text-sm font-bold uppercase"
                     >
                        <option value="BTC/USDT">BITCOIN (BTC)</option>
                        <option value="SOL/USDT">SOLANA (SOL)</option>
                        <option value="ETH/USDT">ETHEREUM (ETH)</option>
                     </select>
                  </div>
               </div>

               <div className="space-y-6">
                  <div className="space-y-1">
                     <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">// QUANTITY_INPUT</span>
                     <input 
                       type="number"
                       value={tradeAmount}
                       onChange={(e) => setTradeAmount(e.target.value)}
                       className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 outline-none focus:border-[#ff5f00] text-sm font-bold uppercase"
                     />
                  </div>
                  
                  <Button 
                    className="w-full h-[58px] text-lg" 
                    variant={tradeAction === 'buy' ? 'primary' : 'danger'}
                    onClick={handleExecute}
                    isLoading={tradeMutation.isPending}
                  >
                    {tradeAction === 'buy' ? 'EXECUTE_BUY_ORDER' : 'EXECUTE_SELL_ORDER'}
                  </Button>
               </div>
            </div>
        </div>

        {/* Security Module */}
        <div className="space-y-4">
          <div className="p-8 bg-slate-900 dark:bg-slate-950 text-white border-4 border-slate-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12">
               <ShieldCheck size={100} />
            </div>
            <h2 className="text-xl font-black uppercase tracking-tighter mb-6">Security_Handshake</h2>
            <div className="space-y-4 relative z-10">
               <div className="flex justify-between items-center text-[10px] font-bold py-2 border-b border-white/10">
                  <span>API_BRIDGE:</span>
                  <span className="text-emerald-500">[ENCRYPTED]</span>
               </div>
               <div className="flex justify-between items-center text-[10px] font-bold py-2 border-b border-white/10">
                  <span>SSL_CERT:</span>
                  <span className="text-emerald-500">[VERIFIED]</span>
               </div>
               <div className="flex justify-between items-center text-[10px] font-bold py-2 border-b border-white/10">
                  <span>IP_ACCESS:</span>
                  <span className="text-blue-500">[VPN_ONLY]</span>
               </div>
            </div>
          </div>
          
          <div className="p-8 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900">
            <h3 className="text-xs font-black uppercase mb-6 pb-2 border-b-2 border-slate-100 dark:border-slate-800">Operational_Status</h3>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[10px] font-bold text-slate-500 uppercase">Bot_Engine: Running</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                   <span className="text-[10px] font-bold text-slate-500 uppercase">Price_Sync: Active</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
