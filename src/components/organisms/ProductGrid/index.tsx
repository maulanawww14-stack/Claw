import React from 'react';
import { Grid, Badge, Button, TextStyle, Icon } from '../../atoms';
import { CardHeader, CardFooter } from '../../molecules';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  status: 'In Stock' | 'Limited' | 'Out of Stock';
  specs: string[];
}

interface ProductGridProps {
  products: Product[];
  onAction: (id: string) => void;
  className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAction, className = '' }) => {
  return (
    <Grid cols={3} gap={8} className={className}>
      {products.map((p) => (
        <div key={p.id} className="flex flex-col border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-[12px_12px_0_0_#ff5f00] transition-all">
          <CardHeader 
            title={p.name} 
            subtitle={`UNIT_ID: ${p.id}`}
            action={<Badge variant={p.status === 'Out of Stock' ? 'danger' : 'success'}>{p.status}</Badge>}
          />
          
          <div className="p-8 space-y-6 flex-1">
             <div className="bg-slate-50 dark:bg-slate-950 p-4 border-2 border-slate-200 dark:border-slate-800">
                <TextStyle variant="caption" className="text-slate-400 mb-2">Technical_Specifications</TextStyle>
                <ul className="space-y-2">
                   {p.specs.map(s => (
                     <li key={s} className="text-[10px] font-bold text-slate-600 dark:text-slate-400 flex items-center gap-2">
                        <Icon name="Settings" size={10} className="text-[#ff5f00]" /> {s}
                     </li>
                   ))}
                </ul>
             </div>

             <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-slate-900 dark:text-white tabular-nums">{p.price}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">USDT_UNIT</span>
             </div>
          </div>

          <CardFooter variant="muted" className="!pt-4">
             <Button className="w-full" onClick={() => onAction(p.id)}>
                Execute_Order_v1
             </Button>
          </CardFooter>
        </div>
      ))}
    </Grid>
  );
};

export default ProductGrid;
