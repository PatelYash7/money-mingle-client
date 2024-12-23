import { BankTransactions, TransactionsWithUsers } from '@/types/type';
import axios from 'axios';
import { selector } from 'recoil';

export const transactionsSelector = selector<TransactionsWithUsers[]>({
	key: 'transactionsSelector',
	get: async () => {
		try {
			const result = await axios.get('/api/get-transactions');
			return result.data.data;
		} catch (error) {
			return [];
		}
	},
});

export const BankTransactionSelector = selector<BankTransactions[]>({
	key:'BankTxnSelector',
	get:async()=>{
		try {
			const result = await axios.get('/api/get-bank-transactions');
			return result.data.data;
		} catch (error) {
			return [];
		}
	}
})
