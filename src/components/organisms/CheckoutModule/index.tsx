import React from 'react';
import { Button, TextStyle, Divider, Grid, Icon } from '../../../components';

const CheckoutModule: React.FC = () => {
  return (
    <div className="font-mono grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Form Area */}
      <div className="lg:col-span-2 space-y-8 p-10 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900">
         <section className="space-y-6">
            <TextStyle variant="h3" weight="black" className="uppercase">Deployment_Location</TextStyle>
            <Grid cols={2} gap={4}>
               <div className="space-y-1">
                  <span className="text-[10px] font-black text-slate-400">// REGION</span>
                  <div className="p-3 border-2 border-slate-900 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold">ASIA-PACIFIC-1</div>
               </div>
               <div className="space-y-1">
                  <span className="text-[10px] font-black text-slate-400">// ZONE</span>
                  <div className="p-3 border-2 border-slate-900 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold">AVAILABILITY-A</div>
               </div>
            </Grid>
            <div className="p-4 border-2 border-dashed border-[#ff5f00] bg-[#ff5f00]/5 text-[#ff5f00] text-[10px] font-bold uppercase">
               SYSTEM_NOTICE: Physical shipment not required for digital node deployment.
            </div>
         </section>

         <section className="space-y-6">
            <TextStyle variant="h3" weight="black" className="uppercase">Transaction_Method</TextStyle>
            <div className="grid grid-cols-1 gap-4">
               {['CREDIT_CARD_X', 'CRYPTO_NODE', 'DIRECT_LINK'].map((method, i) => (
                 <label key={method} className="flex items-center justify-between p-6 border-4 border-slate-200 dark:border-slate-800 cursor-pointer hover:border-[#ff5f00] transition-all group">
                    <div className="flex items-center gap-4">
                       <div className={`w-4 h-4 border-4 rounded-full ${i === 1 ? 'bg-[#ff5f00] border-slate-900' : 'border-slate-300'}`} />
                       <span className="font-black uppercase text-sm tracking-tight">{method}</span>
                    </div>
                    {i === 1 && <Icon name="Zap" size={16} className="text-[#ff5f00]" />}
                 </label>
               ))}
            </div>
         </section>
      </div>

      {/* Summary Area */}
      <div className="space-y-6">
         <div className="p-8 border-4 border-slate-900 dark:border-slate-800 bg-[#ff5f00] text-white shadow-[8px_8px_0_0_#000]">
            <h2 className="text-xl font-black uppercase mb-8 border-b-2 border-white/30 pb-4">Allocation_Summary</h2>
            <div className="space-y-4">
               <div className="flex justify-between text-xs font-bold uppercase">
                  <span>Base_Compute</span>
                  <span>$842.00</span>
               </div>
               <div className="flex justify-between text-xs font-bold uppercase">
                  <span>Quantum_Shield</span>
                  <span>$150.00</span>
               </div>
               <div className="flex justify-between text-xs font-bold uppercase">
                  <span>Network_Tax</span>
                  <span>$08.42</span>
               </div>
               <Divider className="!bg-white/30" />
               <div className="flex justify-between items-baseline">
                  <span className="text-sm font-black uppercase tracking-tighter">Total_Cost</span>
                  <span className="text-4xl font-black tabular-nums">$999.42</span>
               </div>
            </div>
            
            <Button variant="secondary" className="w-full mt-10 h-16 bg-white text-black border-white text-lg">
               EXECUTE_PAYMENT
            </Button>
         </div>

         <div className="p-6 border-2 border-dashed border-slate-400 dark:border-slate-700 opacity-50">
            <p className="text-[10px] font-bold text-center uppercase tracking-widest leading-relaxed">
               Verified by 256-bit AES encryption protocol. Final clearance required.
            </p>
         </div>
      </div>
    </div>
  );
};

export default CheckoutModule;
