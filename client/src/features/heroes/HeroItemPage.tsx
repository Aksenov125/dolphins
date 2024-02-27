import React, { useContext } from 'react';
import './styles/heroes.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const HeroItemPage = (): JSX.Element => {
  const { heroId } = useParams();
  const heroes = useSelector((store: RootState) => store.heroes.heroes);
  const currentHero = heroId && heroes.find((hero) => hero.id === +heroId);

  return currentHero ? (
    <div className="hero-item-page__item">
      <h2 className="hero-item-page__item--name">{currentHero.name}</h2>
      <h3 className="hero-item-page__item--description">{currentHero.description}</h3>
      <img className="hero-item-page__item--img" src={currentHero.img} alt="hero" />
      <p>{currentHero.film}</p>
    </div>
  ) : (
    <h1>Такого героя нет!!!!</h1>
  );
};

export default HeroItemPage;
