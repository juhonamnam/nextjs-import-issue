import axios, { AxiosResponse } from "axios";
import qs from "qs";
import { ICommonResponse } from "./base.interface";

const paramsSerializer = (params: unknown): string => {
  return qs.stringify(params, { arrayFormat: "brackets" });
};

/**
 * Axios instance that raises error for unsuccessful responses
 */
export const fetcher = axios.create({
  timeout: 60000,
  paramsSerializer,
});

fetcher.interceptors.response.use(
  (response: AxiosResponse<ICommonResponse>) => {
    const errCode = response?.data?.errCode;

    if (!errCode && response?.data?.ok) return response;

    throw new Error(errCode);
  },
  (error: Error) => {
    throw error;
  }
);
