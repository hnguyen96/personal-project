type UserRole = "user" | "lawyer";

type SignUpForm = {
  username: string;
  email: string;
  password: string;
};

type SignUpContinueForm = {
  username: string;
  email: string;
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

type Post = {
  id: number;
  userId: string,
  data: string;
  createdAt: string;
};

type PostResponse = {
  results: Post[];
};

type AddPostResponse = {
  message: string;
}