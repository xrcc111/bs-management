import finallRequest from "@/service";

export interface User {
  username: string,
  password: string
}

export interface userState {
  code: number,
  expireAt: string,
  message: string,
  token: string,
}

export const loginIn = (data: User) =>
  finallRequest<User, userState>({
    url: 'users/login',
    method: 'post',
    data
  })
