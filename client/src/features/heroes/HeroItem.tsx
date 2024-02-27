/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import type { Hero, HeroId } from './types';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';

const HeroItem = ({ hero }: { hero: Hero }): JSX.Element => {
  const dispatch = useAppDispatch();

  const onHandleRemoveHero = async (id: HeroId): Promise<void> => {
    const res = await fetch(`/api/heroes/:${id}`, {
      method: 'DELETE',
    });
    const data: { message: string; heroId: HeroId } = (await res.json()) as {
      message: string;
      heroId: HeroId;
    };
    if (data.message === 'success') {
      dispatch({ type: 'heroes/remove', payload: data.heroId });
    }
  };
  return (
    <div className="hero-page__item">
      <h2 className="hero-page__item--name">{hero.name}</h2>
      <h3 className="hero-page__item--description">{hero.description}</h3>
      <img className="hero-page__item--img" src={hero.img} alt="hero" />
      <Link to={`/heroes/${hero.id}`}>More information</Link>
      <button
        className="hero-page__btn--remove"
        onClick={() => onHandleRemoveHero(hero.id)}
        type="button"
      >
        Remove
      </button>
    </div>
  );
};

export default HeroItem;
