export type User = {
	id: String;
	Email: String;
	Name: String;
	Password: String | undefined;
	MobileNumber: String;
	picture: String | undefined;
	role: Role;
	iSGoogle: Boolean;
	isVerified: Boolean;
};
enum Role {
	User,
	Admin,
}
