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
  user: {
    id: string;
    username: string;
    avatarUrl: string;
  };
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


type UserData = {
  id: string;
  username: string;
  active?: boolean;
  avatarUrl?: string;
};

//  WEBHOOKS
type WebhookRequestType = "user.created" | "user.deleted" | "user.updated"

type WebhookRequest = {
  data: WebhookRequestCreateUpdateUserData | WebhookRequestDeleteUserData;
  object: string;
  type: WebhookRequestType;
};

type WebhookResponse = {
  user: unknown;
  message: string;
};

type WebhookRequestDeleteUserData = {
  deleted: boolean;
  id: string;
};

type WebhookRequestCreateUpdateUserData = {
  id: string;
  created_at: number;
  username: string;
  image_url?: string;
};