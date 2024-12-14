import { TransactionsWithReciever, UserWithWallet } from '@/types/type';
import axios from 'axios';
import { selector } from 'recoil';

export const RecentFriends = selector<TransactionsWithReciever[] | null>({
	key: 'RecentFriends',
	get: async () => {
		const response = await axios.get('/api/get-recent-friends');
		if (response.data.code == 1) {
			return response.data.data;
		}
		if (response.data.code == 0) {
			return response.data.data;
		}
	},
});
