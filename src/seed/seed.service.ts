import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance;

  async executeSeed() {
    const maxPokemon = 10;

    const { data } = await axios.get<PokeResponse>(
      `https://pokeapi.co/api/v2/pokemon?limit=${maxPokemon}}`,
    );

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +(url.endsWith('/')
        ? segments[segments.length - 2]
        : segments[segments.length - 1]);
    });

    return data.results;
  }
}
