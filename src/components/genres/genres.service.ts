import { Injectable } from '@nestjs/common';
import { CreateGenreDto, UpdateGenreDto } from './genres.dto';
import { GenresDal } from './genres.dal';

@Injectable()
export class GenresService {
  constructor(private readonly dal: GenresDal) {}

  async create(body: CreateGenreDto) {
    return await this.dal.create(body);
  }

  async list() {
    return await this.dal.list();
  }

  async get(id: number) {
    return await this.dal.get(id);
  }

  async update(id: number, body: UpdateGenreDto) {
    return await this.dal.update(id, body);
  }

  async remove(id: number) {
    return await this.dal.remove(id);
  }
}
