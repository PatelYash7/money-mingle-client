// Create your atoms and selector in
import { UserType } from '@/types/type';
import axios from 'axios';
import { atom, selector } from 'recoil';
export const userSelector = selector<UserType>({
	key: 'UserSelector',
	get: async () => {
		const result = await axios.get<{ user: UserType; code: number }>(
			'/api/get-user',
		);
		return result.data.user;
	},
});

export const userAtom = atom<UserType>({
	key: 'UserAtom',
	default: userSelector,
});
