/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import type { Hero } from './types';
import { useAppDispatch } from '../../redux/store';

const FormAddHero = (): JSX.Element => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [film, setFilm] = useState('');

  const dispatch = useAppDispatch();

  const onHandleAddHeroS: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault();
    const res = await fetch('/api/heroes', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        img,
        description,
        film,
      }),
    });
    const data: { hero: Hero } = (await res.json()) as { hero: Hero };
    dispatch({ type: 'heroes/add', payload: data.hero });
  };

  return (
    <form className="form-add" onSubmit={onHandleAddHeroS}>
      <label className="form-add__label">
        Name
        <input
          className="form-add__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </label>
      <label className="form-add__label">
        Film
        <input
          className="form-add__input"
          value={film}
          onChange={(e) => setFilm(e.target.value)}
          type="text"
        />
      </label>
      <label className="form-add__label">
        Description
        <input
          className="form-add__input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        />
      </label>
      <label className="form-add__label">
        Img
        <input
          className="form-add__input"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          type="text"
        />
      </label>
      <button className="form-add__submit" type="submit">
        Добавить героя
      </button>
    </form>
  );
};

export default FormAddHero;
