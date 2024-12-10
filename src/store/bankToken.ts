import { atom } from 'recoil';

export const bankTokenAtom = atom<string>({
	key: 'bankToken',
	default: '',
});
