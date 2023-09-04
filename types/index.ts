type UserRole = "user" | "lawyer";

type SignUpForm = {
  name: string;
  username: string;
  email: string;
  password: string;
};

type SignInForm = {
  role: UserRole;
  registrationId?: string;
  email: string;
  password: string;
};


type VerifyEmailForm = {
  code: string;
};

type FormInputError = {
  message?: string;
  type?: string;
  ref?: {
    name?: string;
  };
};