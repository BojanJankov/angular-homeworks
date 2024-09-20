export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  country: string;
  city: string;
  yearsOfExperience: number;
  workStatus: string;
  token: string;
  refreshToken: string;
}

export interface RegisterReq {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  country: string;
  city: string;
  yearsOfExperience: number;
  workStatus: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}
