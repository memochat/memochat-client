import { BaseRes } from '.';

export type SendEmail = {
  param: { email: string };
  res: BaseRes<string>;
};

export type SignIn = {
  param: { email: string; password: string };
  res: BaseRes<{
    accessToken: string;
    refreshToken: string;
    userId: number;
  }>;
};

export type SignUp = {
  param: { email: string; password: string };
  res: BaseRes<string>;
};

export type VerifyEmail = {
  param: { email: string };
  res: BaseRes<string>;
};
