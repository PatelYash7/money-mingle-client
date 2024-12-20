import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Providers } from '@/components/providers';
import { Space_Mono } from 'next/font/google';
import { Bricolage_Grotesque } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
const fontHeading = Bricolage_Grotesque({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-heading',
});
export const metadata: Metadata = {
	title: 'Money Mingle',
	description: 'A Next Generation Money Transfer App',
};
const fontBody = Space_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-body',
	weight: ['400', '700'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	
	return (
		<html lang='en'>
			<body
				className={cn('antialiased', fontHeading.variable, fontBody.variable)}
			>
				<Providers
					attribute='class'
					defaultTheme='system'
					enableSystem={true}
					disableTransitionOnChange
				>
					
					{children}
					<Toaster />
				</Providers>
			</body>
		</html>
	);
}
