// Create your atoms and selector in
import { UserType } from '@/types/type';
import axios from 'axios';
import { atom, selector } from 'recoil';
export const userSelector = selector<UserType | null>({
	key: 'UserSelector',
	get: async () => {
		try {
			const result = await axios.get<{ user: UserType; code: number }>(
				'/api/get-user',
			);
			return result.data.user;
		} catch (error) {
			return null;
		}
	},
});

export const userAtom = atom<UserType | null>({
	key: 'UserAtom',
	default: userSelector,
});

export const userNumber = atom<String | null>({
	key: 'UserNumber',
	default: null,
});
