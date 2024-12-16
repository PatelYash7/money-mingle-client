import { FindUserId } from '@/action/find-user';
import { ForgotPassword } from '@/components/forgot-password';

export default async function Page({
	params,
}: {
	params: {
		token: string;
	};
}) {
	const User = await FindUserId(params.token);
	if (User) {
		return <ForgotPassword email={User.Email} />;
	}
}
