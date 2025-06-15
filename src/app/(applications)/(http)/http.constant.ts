import axios from "axios";

export const PAGE_SIZE = 50;

export enum ApiStatus {
  SUCCESS = 200,
  ACCESS_DENIED = 403,
  SERVER_ERROR = 500,
}
export enum ApiMESSAGE {
  ERROR_CORES = "CORS Policy: Not allowed",
  SERVER_ERROR = "Internal Server Error",
}

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

client.interceptors.request.use(
  (config) => config,
  // error handling
  (error) => {
    console.log(error);
  }
);
export default client;
