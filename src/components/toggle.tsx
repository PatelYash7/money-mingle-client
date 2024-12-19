'use client';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	return (
		<Button
			variant='outline'
			size='icon'
			onClick={() => {
				const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
				setTheme(newTheme);
				document.cookie = `theme=${newTheme}; path=/`;
			}}
			className='rounded-full hover:bg-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:text-white text-black focus:ring-0 '
		>
			<SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0  font-extrabold dark:text-primary   dark:hover:text-white text-primary hover:text-black' />
			<MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 font-bold dark:text-primary   dark:hover:text-white text-primary hover:text-black' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	);
}
