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
  url: string;

  constructor(message: string, status: string, url?: string) {
    this.message = message;
    this.status = status;
    this.url = url;
  }
}
