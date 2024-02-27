export type Hero = {
  id: number;
  name: string;
  description: string;
  img: string;
  film: string;
};

export type HeroId = Hero['id'];
