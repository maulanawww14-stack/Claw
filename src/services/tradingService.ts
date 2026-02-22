import { tradingApi } from './api';

export interface TradingState {
    balance_usdt: number;
    positions: Record<string, number>;
    history: any[];
}

export const tradingService = {
    getStatus: async (): Promise<TradingState> => {
        const response = await tradingApi.get('/status');
        return response.data;
    },
    
    executeTrade: async (action: 'buy' | 'sell', symbol: string, amount: number) => {
        const response = await tradingApi.post('/execute', { action, symbol, amount });
        return response.data;
    }
};
