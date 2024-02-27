import { legacy_createStore as createStore, combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { heroesReducer } from './reducers/heroesReducer';
import { usersReducer } from './reducers/usersReducer';
import { authReducer } from './reducers/authReducer';

export const store = createStore(
  combineReducers({
    users: usersReducer,
    heroes: heroesReducer,
    auth: authReducer,
  }),
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
