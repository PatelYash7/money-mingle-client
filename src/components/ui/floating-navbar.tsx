'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ModeToggle } from '../toggle';

export const FloatingNav = ({
	navItems,
	className,
}: {
	navItems: {
		name: string;
		link: string;
		icon?: JSX.Element;
	}[];
	className?: string;
}) => {
	const session = useSession();
	const router = useRouter();
	const [active, setActive] = useState<string | null>(null);
	return (
		<div
			onMouseLeave={() => {
				setActive(null);
			}}
		>
			<AnimatePresence mode='wait'>
				<motion.div
					initial={{
						opacity: 0,
						y: -100,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						duration: 0.5,
					}}
					className={cn(
						'flex max-w-fit  fixed top-4 inset-x-0 mx-auto border border-primary dark:border-primary  rounded-full dark:bg-black bg-white shadow-sm shadow-primary-foreground z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4',
						className,
					)}
				>
					{navItems.map((navItem: any, idx: number) => (
						<Link
							key={`link=${idx}`}
							href={navItem.link}
							className={cn(
								'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500',
							)}
						>
							<span className='block sm:hidden'>{navItem.icon}</span>
							<span className='hidden sm:block text-sm font-semibold text-primary'>
								{navItem.name}
							</span>
						</Link>
					))}

					{session.data?.user.name ?
						<MenuItem
							setActive={setActive}
							active={active}
							item={session.data.user.name.split(' ')[0]}
						>
							<div className='flex  flex-col space-y-2 text-sm'>
								<HoveredLink href={'/profile'}>Profile</HoveredLink>
								<div
									onClick={() => {
										signOut();
									}}
									className='text-primary'
								>
									<HoveredLink>Logout</HoveredLink>
								</div>
							</div>
						</MenuItem>
					:	<button
							onClick={() => {
								router.push('/signin');
							}}
							className='border text-sm font-semibold relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full'
						>
							<span className='text-primary'>Login</span>{' '}
						</button>
					}
					<ModeToggle />
				</motion.div>
			</AnimatePresence>
		</div>
	);
};
const transition = {
	type: 'spring',
	mass: 0.5,
	damping: 11.5,
	stiffness: 100,
	restDelta: 0.001,
	restSpeed: 0.001,
};
export const MenuItem = ({
	setActive,
	active,
	item,
	children,
}: {
	setActive: (item: string) => void;
	active: string | null;
	item: string;
	children?: React.ReactNode;
}) => {
	return (
		<div onMouseEnter={() => setActive(item)} className='relative '>
			<motion.p
				transition={{ duration: 0.3 }}
				className='cursor-pointer text-primary font-semibold hover:opacity-[0.9] '
			>
				{item}
			</motion.p>
			{active !== null && (
				<motion.div
					initial={{ opacity: 0, scale: 0.85, y: 10 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={transition}
				>
					{active === item && (
						<div className='absolute top-[calc(100%_+_0.2rem)] left-1/2 transform -translate-x-1/2 pt-4'>
							<motion.div
								transition={transition}
								layoutId='active' // layoutId ensures smooth animation
								className=' backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl'
							>
								<motion.div
									layout // layout ensures smooth animation
									className='w-max h-full p-4'
								>
									{children}
								</motion.div>
							</motion.div>
						</div>
					)}
				</motion.div>
			)}
		</div>
	);
};
export const HoveredLink = ({
	children,
	href,
}: {
	children: any;
	href?: string;
}) => {
	if (href) {
		return (
			<Link
				href={href}
				className='text-primary  font-semibold  hover:text-primary-foreground '
			>
				{children}
			</Link>
		);
	}
	return (
		<div className='text-primary cursor-pointer font-semibold hover:text-primary-foreground'>
			{children}
		</div>
	);
};
