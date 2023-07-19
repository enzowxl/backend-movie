export interface UserRequest {
  name: string;
  email: string;
  password: string;
}

export interface UserAuth {
  email: string;
  password: string;
}

export interface PayLoad {
  sub: string;
}
