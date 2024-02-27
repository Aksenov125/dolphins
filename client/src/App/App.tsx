import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeroesListPage from '../features/heroes/HeroesListPage';
import type { Hero } from '../features/heroes/types';
import NavBar from '../features/navbar/NavBar';
import MainPage from '../features/main/MainPage';
import HeroItemPage from '../features/heroes/HeroItemPage';
import Callbek from '../features/memo/callbe4ik';
import { useAppDispatch } from '../redux/store';
import { User } from '../redux/reducers/types';
import UsersListPage from '../features/users/UsersListPage';
import RegistrationPage from '../features/auth/RegistrationPage';
import AuthorizationPage from '../features/auth/AuthorizationPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const loadHeroes = async (): Promise<void> => {
    const res = await fetch('/api/heroes');
    const data: { heroes: Hero[] } = (await res.json()) as { heroes: Hero[] };
    // dispatch({ type: 'heroes/load', payload: data.heroes });
    dispatch({ type: 'heroes/load', payload: data.heroes });
  };
  const loadUsers = async (): Promise<void> => {
    const res = await fetch('/api/users');
    const data: { users: User[] } = (await res.json()) as { users: User[] };
    // dispatch({ type: 'heroes/load', payload: data.heroes });
    dispatch({ type: 'users/load', payload: data.users });
  };

  const checkUser = async (): Promise<void> => {
    const res = await fetch('/api/auth/check');
    const data: { user: User } = (await res.json()) as { user: User };
    // dispatch({ type: 'heroes/load', payload: data.heroes });
    dispatch({ type: 'auth/sign-in', payload: data.user });
  };

  useEffect(() => {
    loadHeroes().catch(console.log);
    loadUsers().catch(console.log);
    checkUser().catch(console.log);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<MainPage />} />
          <Route path="/heroes" element={<HeroesListPage />} />
          <Route path="/users" element={<UsersListPage />} />
          <Route path="/sign-up" element={<RegistrationPage />} />
          <Route path="/sign-in" element={<AuthorizationPage />} />
          <Route path="/heroes/:heroId" element={<HeroItemPage />} />
          <Route path="/memo" element={<Callbek />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
      {/* <CounterPage /> */}

      {/* <HeroItemPage /> */}
    </div>
  );
}

export default App;
