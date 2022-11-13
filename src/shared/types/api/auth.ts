export type SendEmail = {
  param: { email: string };
  res: string;
};

export type SignIn = {
  param: { email: string; password: string };
  res: {
    accessToken: string;
    refreshToken: string;
    userId: number;
  };
};

export type SignUp = {
  param: { email: string; password: string };
  res: string;
};

export type VerifyEmail = {
  param: { email: string };
  res: string;
};
