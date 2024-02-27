/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import type { User } from '../../redux/reducers/types';

const UserItem = ({ user }: { user: User }): JSX.Element => {
  return (
    <div className="user-page__item">
      <h2 className="user-page__item--name">{user.name}</h2>
      <h3 className="user-page__item--description">{user.password}</h3>
      <img className="user-page__item--img" src={user.img} alt="hero" />
    </div>
  );
};

export default UserItem;
