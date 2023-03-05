import { BaseRes } from './';

export type ChangeNickName = {
  param: {
    nickname: string;
  };
  res: BaseRes<string>;
};

export type ChangePassword = {
  req: {
    password: string;
  };
  res: BaseRes<string>;
};
