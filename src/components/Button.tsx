'use client';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export const ButtonPrimary = ({
	title,
	className,
	handleClick,
	url,
}: {
	className?: string;
	title: string;
	handleClick?: () => void;
	url?: string;
}) => {
	const router = useRouter();
	return (
		<Button
			onClick={() => {
				handleClick && handleClick();
				if (url) {
					router.push(url);
				}
			}}
			className={cn(
				'bg-primary z-10 rounded-full px-6  hover:bg-primary-foreground text-white',
				className,
			)}
		>
			{title}
		</Button>
	);
};
