export type ApiResponse<T = any> = {
  results: T[];
  info: ApiPaginate;
};

export type ApiPaginate = {
  seed: string;
  results: number;
  page: number;
  version: string;
};

export type ApiError = {
  error: string;
};
