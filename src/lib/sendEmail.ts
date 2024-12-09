import { TokenType } from '@prisma/client';
import nodemailer from 'nodemailer';

export async function sendEmail(email: string, link: string, type: TokenType) {
	try {
		const transporter = nodemailer.createTransport({
			host: 'sandbox.smtp.mailtrap.io',
			port: 587,
			auth: {
				user: 'f06564f4a1a07f',
				pass: 'aa3dec5bce777d',
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
	} catch (error) {
		console.error('Error sending email:', error);
	}
}
