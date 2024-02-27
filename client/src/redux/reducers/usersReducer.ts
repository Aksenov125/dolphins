/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable import/prefer-default-export */

import type { Action, UsersState } from './types';

const initState: UsersState = {
  users: [],
};

export const usersReducer = (state: UsersState = initState, action: Action): UsersState => {
  switch (action.type) {
    case 'users/load':
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
