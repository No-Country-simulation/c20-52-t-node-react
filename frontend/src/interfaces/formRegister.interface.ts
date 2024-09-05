export type UserForm = {
  firstName: string;
  lastName: string;
  age: string;
  birthday: string;
  gender: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type FormErrors = {
  firstName?: string;
  lastName?: string;
  age?: string;
  birthday?: string;
  gender?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};
