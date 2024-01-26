import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    const maxPokemon = 659;

    try {
      const data = await this.http.get<PokeResponse>(
        `https://pokeapi.co/api/v2/pokemon?limit=${maxPokemon}}`,
      );

      await this.pokemonModel.deleteMany({});

      const pokemonToInsert: { name: string; no: number }[] = [];

      data.results.map(({ name, url }) => {
        const segments = url.split('/');
        const no = +(url.endsWith('/')
          ? segments[segments.length - 2]
          : segments[segments.length - 1]);

        pokemonToInsert.push({ name, no });
      });

      await this.pokemonModel.insertMany(pokemonToInsert);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        'Error seeding the database. Watch the server logs',
      );
    }
  }
}
