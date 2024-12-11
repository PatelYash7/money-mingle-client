import { TokenType } from '@prisma/client';
import nodemailer from 'nodemailer';

export async function sendEmail(email: string, link: string, type: TokenType) {
	try {
		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			auth: {
				user: 'yashpate0101@gmail.com',
				pass: process.env.MAIL_PASSWORD,
			},
		});
		if (type === 'BANK_VERIFICATION') {
			const mailOptions = {
				from: 'yashpate0101@gmail.com',
				to: email,
				subject: 'Confirm your Email',
				text: `Click the following link to confirm your email: ${link}`,
				html: `<p>Click the following link to confirm your email:</p><a href="${link}">Confirm Email</a>`,
			};
			await transporter.sendMail(mailOptions);
		}
		if(type==='WALLET_VERIFICATION'){
			const mailOptions = {
				from: 'yashpate0101@gmail.com',
				to: email,
				subject: 'Wallet Verification',
				text: `Click the following link to confirm your Wallet: ${link}`,
				html: `<p>Click the following link to confirm your email:</p><a href="${link}">Confirm Email</a>`,
			};
			await transporter.sendMail(mailOptions);
		}
	} catch (error) {
		console.error('Error sending email:', error);
	}
}
