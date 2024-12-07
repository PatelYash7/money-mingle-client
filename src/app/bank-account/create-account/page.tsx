'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

export default function CreateAccountPage() {
	const [formData, setFormData] = useState({
		mobileNumber: '',
		name: '',
		accountNumber: '',
		email: '',
	});
	const [errors, setErrors] = useState({
		mobileNumber: '',
		name: '',
		accountNumber: '',
		email: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [confirmationCode, setConfirmationCode] = useState('');
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setErrors((prev) => ({ ...prev, [name]: '' }));
	};

	const validateForm = () => {
		let isValid = true;
		const newErrors = { ...errors };

		if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
			newErrors.mobileNumber = 'Mobile number must be 10 digits';
			isValid = false;
		}

		if (formData.name.length < 2) {
			newErrors.name = 'Name must be at least 2 characters';
			isValid = false;
		}

		if (!/^[0-9]{8}$/.test(formData.accountNumber)) {
			newErrors.accountNumber = 'Account number must be 8 digits';
			isValid = false;
		}

		if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Invalid email address';
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;

		setIsLoading(true);

		// Here you would typically send the data to your backend API
		// For this example, we'll just simulate an API call with a timeout
		await new Promise((resolve) => setTimeout(resolve, 2000));

		setIsLoading(false);
		toast({
			title: 'Account created successfully',
			description: 'Your bank account has been created.',
		});

		// Reset form after successful submission
		setFormData({
			mobileNumber: '',
			name: '',
			accountNumber: '',
			email: '',
		});
	};

	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='container mx-auto max-w-lg py-10 border-2 rounded-lg'>
				<h1 className='text-3xl font-bold mb-6'>Create Bank Account</h1>
				<form onSubmit={handleSubmit} className='space-y-6'>
					<div className='space-y-2'>
						<Label htmlFor='mobileNumber'>Mobile Number</Label>
						<Input
							id='mobileNumber'
							name='mobileNumber'
							placeholder='Enter your 10-digit mobile number'
							value={formData.mobileNumber}
							onChange={handleChange}
							aria-invalid={errors.mobileNumber ? 'true' : 'false'}
						/>
						{errors.mobileNumber && (
							<p className='text-sm text-red-500'>{errors.mobileNumber}</p>
						)}
					</div>

					<div className='space-y-2'>
						<Label htmlFor='name'>Name</Label>
						<Input
							id='name'
							name='name'
							placeholder='Enter your full name'
							value={formData.name}
							onChange={handleChange}
							aria-invalid={errors.name ? 'true' : 'false'}
						/>
						{errors.name && (
							<p className='text-sm text-red-500'>{errors.name}</p>
						)}
					</div>

					{/* <div className="space-y-2">
          <Label htmlFor="accountNumber">Account Number</Label>
          <Input
            id="accountNumber"
            name="accountNumber"
            placeholder="Enter an 8-digit account number"
            value={formData.accountNumber}
            onChange={handleChange}
            aria-invalid={errors.accountNumber ? 'true' : 'false'}
          />
          {errors.accountNumber && <p className="text-sm text-red-500">{errors.accountNumber}</p>}
        </div> */}

					<div className='space-y-2'>
						<Label htmlFor='email'>Email</Label>
						<Input
							id='email'
							name='email'
							type='email'
							placeholder='Enter your email address'
							value={formData.email}
							onChange={handleChange}
							aria-invalid={errors.email ? 'true' : 'false'}
						/>
						{errors.email && (
							<p className='text-sm text-red-500'>{errors.email}</p>
						)}
					</div>
                    <div className='space-y-2'>
						<Label htmlFor='password'>Password</Label>
						<Input
							id='password'
							name='password'
							type='password'
							placeholder='Enter a Strong Password'
							// value={formData.email}
							// onChange={handleChange}
							// aria-invalid={errors.email ? 'true' : 'false'}
						/>
						{/* {errors.email && (
							<p className='text-sm text-red-500'>{errors.email}</p>
						)} */}
					</div>
					{isLoading && (
						<div className='space-y-2'>
							<Label htmlFor='confirmation Code'>Confirmation Code</Label>
							<p>Check Confirmation Code in provided mail</p>
							<Input
								id='code'
								name='confirmation code'
								type='confirmation code'
								placeholder='Confirmation Code.'
								// value={formData.email}
								// onChange={handleChange}
								// aria-invalid={errors.email ? 'true' : 'false'}
							/>
							{errors.email && (
								<p className='text-sm text-red-500'>{errors.email}</p>
							)}
						</div>
					)}
					<Button type='submit' disabled={isLoading}>
						{isLoading ? 'Creating Account...' : 'Create Account'}
					</Button>
				</form>
			</div>
		</div>
	);
}
