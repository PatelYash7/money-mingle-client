import path from 'path';
import z from 'zod';
export const UserSchemaSignup = z
	.object({
		Email: z.string().email('Invalid Email Format'),
		MobileNumber: z
			.string()
			.min(1, { message: 'Phone number Cannot be empty' })
			.refine(
				(value) => {
					const phoneRegex =
						/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
					return phoneRegex.test(value.replace(/[\s()-]/g, ''));
				},
				{ message: 'Invalid phone number Format' },
			),
		Name: z.string().min(1, { message: 'Name Cannot be Empty' }),
		Password: z
			.string()
			.min(8, 'Password must be at least 8 characters')
			.regex(
				/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
				'Password must use UpperCase(A),LowerCase(a),digit(1) and special character(%)',
			),
		confirmPassword: z
			.string()
			.min(1, { message: 'Confirm Password is Required' }),
	})
	.refine((data) => data.Password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'Passwords do not match',
	});
export type UserSchemaSignupType = z.infer<typeof UserSchemaSignup>;
export const UserSchemaSignin = z.object({
	Email: z.string().email('Invalid Email Format'),
	Password: z
		.string()
		.min(8, 'Password must be at least 8 characters')
		.regex(
			/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
			'Password must use UpperCase(A),LowerCase(a),digit(1) and special character(%)',
		),
});
export type UserSchemaSigninType = z.infer<typeof UserSchemaSignin>;

export const BankDetailsSchema = z
	.object({
		Email: z.string().email('Invalid Email Format'),
		Name: z.string().min(1, { message: 'Name Cannot be Empty' }),
		Password: z
			.string()
			.min(8, 'Password must be at least 8 characters')
			.regex(
				/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
				'Password must use UpperCase(A),LowerCase(a),digit(1) and special character(%)',
			),
		MobileNumber: z
			.string()
			.min(1, { message: 'Phone number Cannot be empty' })
			.refine(
				(value) => {
					const phoneRegex =
						/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
					return phoneRegex.test(value.replace(/[\s()-]/g, ''));
				},
				{ message: 'Invalid phone number Format' },
			),
		confirmPassword: z
			.string()
			.min(1, { message: 'Confirm Password is Required' }),
	})
	.refine(
		(data) => data.Password === data.confirmPassword,

		{
			path: ['confirmPassword'],
			message: 'Password does not Match with Confirm Password',
		},
	);

export type BankDetailsSchemaType = z.infer<typeof BankDetailsSchema>;

export const WalletPassword = z
	.object({
		Password: z
			.string()
			.min(8, 'Password must be at least 8 characters')
			.regex(
				/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
				'Password must use UpperCase(A),LowerCase(a),digit(1) and special character(%)',
			),
		confirmPassword: z
			.string()
			.min(1, { message: 'Confirm Password is Required' }),
	})
	.refine(
		(data) => data.Password === data.confirmPassword,

		{
			path: ['confirmPassword'],
			message: 'Password does not Match with Confirm Password',
		},
	);

export type WalletPasswordType = z.infer<typeof WalletPassword>;
