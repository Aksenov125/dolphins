/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable import/prefer-default-export */
import type { Action, State } from './types';
import type { Hero } from '../../features/heroes/types';

type InitState = {
  heroes: Hero[];
};

export const heroesReducer = (state: State = InitState, action: Action): State => {
  switch (action.type) {
    case 'heroes/load':
      return {
        ...state,
        heroes: action.payload,
      };
    case 'heroes/add':
      return {
        ...state,
        heroes: [...state.heroes, action.payload],
      };
    case 'heroes/remove':
      return {
        ...state,
        heroes: state.heroes.filter((hero) => hero.id !== +action.payload),
      };
    default:
      return state;
  }
};
