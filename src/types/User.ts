export interface User {
  id: number;
  nickname: string;
  photoPath: string;
  rating: number;
}

export type LoginData = {
  email: string;
  password: string;
};