// Create your atoms and selector in this folder.
import { User } from '@/types/type';
import axios, { AxiosResponse } from 'axios';
import { atom, selector } from 'recoil';
const userSelector = selector({
	key: 'UserSelector',
	get: async () => {
		const result = await axios.get<{user:User,code:number}>('/api/get-user');
		return result.data.user;
	},
});

export const userAtom = atom<User>({
	key: 'UserAtom',
	default: userSelector,
});
