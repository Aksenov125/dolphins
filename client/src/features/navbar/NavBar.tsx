/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './styles/navbar.scss';

import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState} from '../../redux/store';
import { useAppDispatch } from '../../redux/store';

const NavBar = (): JSX.Element => {
  const {user} = useSelector((store: RootState) => store.auth.auth);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleLogout = async (): Promise<void> => {
    const res = await fetch('/api/auth/logout');
    const data: { message: string } = (await res.json()) as { message: string };
    if (data.message === 'success') {
      dispatch({ type: 'auth/logout' });
      navigate('/');
    }
  };

  return (
    <>
      <ul className="nav__container">
        {user && <li>Hello, {user.password}!</li>}
        <li className="nav__item">
          <NavLink className="nav__link" to="/">
            Main
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/users">
            Users
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/heroes">
            Heroes
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/sign-in">
            Authorization
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/sign-up">
            Registration
          </NavLink>
        </li>
        <li onClick={handleLogout} className="nav__item">
          <NavLink className="nav__link" to="/logout">
            LogOut
          </NavLink>
        </li>
      </ul>
      <Outlet />
      <h1 style={{ fontSize: '100px', color: 'red', textAlign: 'center' }}>Footer</h1>
    </>
  );
};

export default NavBar;
