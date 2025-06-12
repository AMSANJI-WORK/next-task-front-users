export interface UsersResponse {
  results: User[];
  info: PaginateInfo;
}

export type PaginateInfo = {
  seed: string;
  results: number;
  page: number;
  version: string;
};

export type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: UserLocation;
  email: string;
  login: UserLoginInfo;
  dob: UserDob;
  registered: UserDob;
  phone: string;
  cell: string;
  id: UserID;
  picture: UserPicture;
  nat: string;
};

export type UserDob = {
  date: Date;
  age: number;
};

export type UserID = {
  name: string;
  value: string;
};

export type UserLocation = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
};

export type UserLoginInfo = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};


export type UserPicture = {
  large: string;
  medium: string;
  thumbnail: string;
};
