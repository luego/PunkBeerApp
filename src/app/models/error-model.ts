// Generated by https://quicktype.io

export interface ErrorModel {
  statusCode: number;
  error: string;
  message: string;
  data?: Datum[];
}

export interface Datum {
  param: string;
  msg: string;
  value: string;
}
