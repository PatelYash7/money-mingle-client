import { UserWithWallet } from '@/types/type';
import { User } from '@prisma/client';
import { atom } from 'recoil';

export const PaymentUser = atom<User | undefined>({
	key: 'PaymentUser',
	default: undefined,
});
