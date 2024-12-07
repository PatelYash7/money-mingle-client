'use client';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export const handleToast = ({
	title,
	description,
	className,
}: {
	title: string;
	description: string;
	className: string;
}) => {
	return toast({
		title: title,
		description: description,
		className: cn('text-white text-lg', className),
	});
};
