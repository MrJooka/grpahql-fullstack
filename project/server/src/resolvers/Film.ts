import { FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { Director } from '../entities/Director';
import ghibliData from '../data/ghibli';
import { Film } from '../entities/Film';

@Resolver(Film)
export class FilmResolver {
  @Query(() => [Film])
  films(): Film[] {
    return ghibliData.films;
  }

  @FieldResolver(() => Director)
  director(@Root() parentFilm: Film): Director | undefined {
    return ghibliData.directors.find((dr) => dr.id === parentFilm.director_id);
  }
}

type Query = {
  films: Film[];
};
