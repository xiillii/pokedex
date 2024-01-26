import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance;

  constructor(private readonly pokemonService: PokemonService) {}

  async executeSeed() {
    const maxPokemon = 659;

    try {
      const { data } = await axios.get<PokeResponse>(
        `https://pokeapi.co/api/v2/pokemon?limit=${maxPokemon}}`,
      );

      const results = data.results.map(async ({ name, url }) => {
        const segments = url.split('/');
        const no = +(url.endsWith('/')
          ? segments[segments.length - 2]
          : segments[segments.length - 1]);

        await this.pokemonService.create({ no, name });
      });

      const allPromise = Promise.allSettled(results);
      const statuses = await allPromise;

      if (statuses.filter((s) => s.status === 'rejected').length > 0) {
        console.log(statuses);
        throw new InternalServerErrorException(
          'Error seeding the database. Watch the server logs',
        );
      }
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        'Error seeding the database. Watch the server logs',
      );
    }
  }
}
