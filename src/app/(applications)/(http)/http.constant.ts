import axios from "axios";

export const PAGE_SIZE = 100;

export enum ApiStatus {
  SUCCESS = 200,
  ACCESS_DENIED = 403,
}
export enum ApiMESSAGE {
  ERROR_CORES = "CORS Policy: Not allowed",
}

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_INTERNAL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
