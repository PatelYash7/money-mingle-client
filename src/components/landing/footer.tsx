import Link from 'next/link';

export function Footer() {
	const footerSections = [
		{
			title: 'Product',
			links: ['Features', 'Security', 'Business', 'Enterprise', 'Pricing'],
		},
		{
			title: 'Resources',
			links: ['Blog', 'Help Center', 'Contact', 'Partners'],
		},
		{
			title: 'Company',
			links: ['About Us', 'Careers', 'Press', 'News'],
		},
		{
			title: 'Legal',
			links: ['Terms', 'Privacy', 'Security', 'Support'],
		},
	];

	return (
		<footer className='border-t rounded-t-3xl '>
			<div className='container px-4 md:px-6 py-6'>
				<div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
					<div className='text-sm text-primary-foreground cursor-default'>
						© 2024 Zenpay. All rights reserved.
					</div>
					<div className='flex space-x-4'>
						<Link
							target='_blank'
							href='https://github.com/PatelYash7'
							className='text-primary font-bold cursor-pointer hover:text-primary-foreground'
						>
							Github
						</Link>
						<Link
							target='_blank'
							href='https://www.linkedin.com/in/yash-patel-86666b1b9/x'
							className='text-primary font-bold cursor-pointer hover:text-primary-foreground'
						>
							LinkedIn
						</Link>
						<Link
							target='_blank'
							href='https://x.com/yashpatel_113'
							className='text-primary font-bold cursor-pointer hover:text-primary-foreground'
						>
							Twitter
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
