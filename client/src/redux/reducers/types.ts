import type { Hero, HeroId } from '../../features/heroes/types';

export type User = {
  id: number;
  name: string;
  img: string;
  password: string;
};

export type State = {
  heroes: Hero[];
};

export type UsersState = {
  users: User[];
};

export type AuthState = {
  auth: User | undefined;
};

export type Action =
  | { type: 'heroes/load'; payload: Hero[] }
  | { type: 'heroes/add'; payload: Hero }
  | { type: 'heroes/remove'; payload: HeroId }
  | { type: 'users/load'; payload: User[] }
  | { type: 'auth/sign-up'; payload: User }
  | { type: 'auth/sign-in'; payload: User }
  | { type: 'auth/logout' };
