import { AxiosPromise, AxiosRequestConfig } from "axios";

export type IAxiosCommonResponse<Data = any> = AxiosPromise<
  ICommonResponse<Data>
>;

export interface ICommonResponse<Data = any> {
  ok?: boolean;
  data?: Data;
  errDescription?: string;
  errCode?: string;
}

export interface IPageListDto<RecordType> {
  list?: Array<RecordType>;
  paginate?: IPaginateDto;
}

export interface IPaginateDto {
  limit?: number;
  offset?: number;
  total?: number;
}

export interface IRequestConfig extends Omit<AxiosRequestConfig, "baseURL"> {}
