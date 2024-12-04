//You can Update the types for the Session and Token data.
// Added some initial type which can be useful initially.

import 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
	interface User {
		name: string;
		email: string;
		MobileNumber?: string;
		role?: string;
	}
	interface Session {
		user: {
			id: string;
			name: string;
			email: string;
			MobileNumber?: string;
			role?: string;
		} & DefaultSession['user'];
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		id: string;
		name: string;
		email: string;
		MobileNumber?: string;
		role?: string;
	}
}
