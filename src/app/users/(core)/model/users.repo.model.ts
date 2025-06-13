export type GetUsersProps = {
  results: number;
  page: number;
  seed: string;
  gender: "male" | "female";
  password: string;
  format: "csv" | "xml" | "yaml" | "json";
  nat: string; // nationality
  inc: string; // can specific what field do you want
  exc: string; // can specific except what field do you want
  callback: string;
  noinfo: string;
  dl: string;
};
