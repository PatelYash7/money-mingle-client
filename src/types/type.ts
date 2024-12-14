import { Prisma } from '@prisma/client';
export type UserType = {
	id: String;
	Email: String;
	Name: String;
	Password: String | undefined;
	MobileNumber: String;
	picture: String | undefined;
	role: Role;
	iSGoogle: Boolean;
	isVerified: Boolean;
	Wallet: {
		id: String;
		userId: String;
		pin: Number | undefined;
		Balance: Number;
	};
};
enum Role {
	User,
	Admin,
}
export type TransactionsWithUsers = Prisma.TransactionsGetPayload<{
	include: {
		Sender: true;
		Receiver: true;
	};
}>;
export type UserWithWallet = Prisma.UserGetPayload<{
	include: { Wallet: true };
}>;
