/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import type { User } from '../../redux/reducers/types';
import { useAppDispatch } from '../../redux/store';

const AuthorizationPage = (): JSX.Element => {
  const [name, setName] = useState('');
  const [password, setPasssword] = useState('');

  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault();
    const res = await fetch('/api/auth/sign-in', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });
    const data: { message: string; user: User } = (await res.json()) as {
      message: string;
      user: User;
    };
    dispatch({ type: 'auth/sign-in', payload: data.user });
  };
  return (
    <div>
      <h1>AuthorizationPage</h1>
      <form onSubmit={onHandleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        <input value={password} onChange={(e) => setPasssword(e.target.value)} type="text" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default AuthorizationPage;
