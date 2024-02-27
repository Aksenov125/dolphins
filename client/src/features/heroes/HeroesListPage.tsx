/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HeroItem from './HeroItem';
import FormAddHero from './FormAddHero';
import { type RootState } from '../../redux/store';
import './styles/heroes.scss';

const HeroesListPage = (): JSX.Element => {
  const heroes = useSelector((store: RootState) => store.heroes.heroes);

  const navigate = useNavigate();

  return (
    <>
      <FormAddHero />
      <h1 className="hero-page__title">HeroesListPage</h1>
      <div className="hero-page__container">
        {heroes.map((hero) => (
          <HeroItem key={hero.id} hero={hero} />
        ))}
      </div>
      <button onClick={() => navigate(5)} type="button">
        100 шагов назад
      </button>
    </>
  );
};

export default HeroesListPage;
