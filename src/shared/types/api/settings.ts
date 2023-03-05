import { BaseRes } from './';

export type ChangeNickName = {
  param: {
    nickname: string;
  };
  res: BaseRes<string>;
};

export type ChangePassword = {
  param: {
    password: string;
  };
  res: BaseRes<string>;
};

export type CheckPassword = {
  param: {
    password: string;
  };
  res: BaseRes<string>;
};
