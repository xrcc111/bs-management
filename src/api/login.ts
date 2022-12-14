import finallRequest from "@/service";

export interface User {
  username: string,
  password: string
}

export const loginIn = (data: User) =>
  finallRequest({
    url: 'users/login',
    method: 'post',
    data
  })
