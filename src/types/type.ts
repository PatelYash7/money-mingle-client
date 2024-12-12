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
import { PrismaClient, Prisma } from '@prisma/client';
export type UserWithWallet = Prisma.UserGetPayload<{
	include: { Wallet: true };
}>;
