export interface Register {
  id: string,
  name: string,
  userName: string,
  email: string,
  password: string,
  confirmPassword: string,
  state?: string,
  city?: string,
  pin?: number,
  token: string;
}
