export type BaseRes<T> = {
  status: string;
  message: string;
  data: T;
};

export interface BaseError {
  status: string;
  message: string;
}

export class MemoChatError implements BaseError {
  status: string;
  message: string;

  constructor(message: string, status: string) {
    this.message = message;
    this.status = status;
  }
}
