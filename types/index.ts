type UserRole = "user" | "lawyer";

type SignUpForm = {
  username: string;
  email: string;
  password: string;
};

type SignInForm = {
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