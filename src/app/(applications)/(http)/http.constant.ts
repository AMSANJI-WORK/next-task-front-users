import axios from "axios";

export const PAGE_SIZE = 100;

export enum ApiStatus {
  SUCCESS = 200,
  ACCESS_DENIED = 403,
  SERVER_ERROR = 500,
}
export enum ApiMESSAGE {
  ERROR_CORES = "CORS Policy: Not allowed",
  SERVER_ERROR = "Internal Server Error",
  TIMEOUT = "Connection TimeOut",
}

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_INTERNAL,
});

export default client;
