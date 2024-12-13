import { BankAccount, TokenType } from '@prisma/client';
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
		if (type === 'WALLET_VERIFICATION') {
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

export const SendBankDetails = async ({
	BankDetails,
	email,
}: {
	email: string;
	BankDetails: BankAccount;
}) => {
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		auth: {
			user: 'yashpate0101@gmail.com',
			pass: process.env.MAIL_PASSWORD,
		},
	});
	const mailOptions = {
		from: 'yashpate0101@gmail.com',
		to: email,
		subject: 'Money Mingle Bank Account Details',
		text: `Bank Account Details`,
		html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Details</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
        }
        .header {
            background: #007BFF;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 24px;
        }
        .content {
            padding: 20px;
            line-height: 1.6;
            color: #333333;
        }
        .content h2 {
            color: #007BFF;
            margin-bottom: 10px;
        }
        .details-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        .details-table th, .details-table td {
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid #dddddd;
        }
        .details-table th {
            background-color: #f4f4f4;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background: #f4f4f4;
            font-size: 14px;
            color: #888888;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            User Account Details
        </div>
        <div class="content">
            <h2>Hello, {${BankDetails.Name}}</h2>
            <p>Here are the details of your account:</p>
            <table class="details-table">
                <tr>
                    <th>Mobile Number</th>
                    <td>{${BankDetails.MobileNumber}}</td>
                </tr>
                <tr>
                    <th>Password</th>
                    <td>{${BankDetails.Password}}</td>
                </tr>
                <tr>
                    <th>Account Number</th>
                    <td>{${BankDetails.AccountNumber}}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{${BankDetails.Email}}</td>
                </tr>
                <tr>
                    <th>Verified</th>
                    <td>{${BankDetails.isVerified ? 'Yes' : 'No'}}</td>
                </tr>
            </table>
        </div>
        <div class="footer">
            This is an automated message. Please do not reply.
        </div>
    </div>
</body>
</html>
`,
	};
	try{
		await transporter.sendMail(mailOptions);
	}catch(error){
		console.log("Error Sending Mails",error)
	}
};
