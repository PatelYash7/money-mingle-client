import { getUser } from '@/action/get-user';
import { UpdatePin } from '@/components/wallet/update-pin';
import { WalletTransfer } from '@/components/wallet/wallet-transfer';
import { WalletVerification } from '@/components/wallet/wallet-verification';

export default async function Page() {
	const User = await getUser();
	if (User?.Wallet?.id && !User?.Wallet?.pin) {
		return (
			<div className=''>
				<UpdatePin id={User.Wallet.id} />
			</div>
		);
	}
	if (User?.Wallet) {
		return (
			<div>
				<WalletTransfer User={User} />
			</div>
		);
	}
	return (
		<div>
			<WalletVerification />
		</div>
	);
}
