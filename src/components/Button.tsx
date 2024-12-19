import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export const ButtonPrimary = ({
	title,
	className,
	handleClick,
}: {
	className?: string;
	title: string;
	handleClick?: () => void;
}) => {
	return (
		<Button
			size={'default'}
			onClick={handleClick}
			className={cn(
				'bg-primary hover:bg-primary-foreground text-white',
				className,
			)}
		>
			{title}
		</Button>
	);
};
