import { Injectable } from '@nestjs/common';
import { CreateAuthorDto, UpdateAuthorDto } from './authors.dto';
import { AuthorsDal } from './authors.dal';

@Injectable()
export class AuthorsService {
  constructor(private readonly dal: AuthorsDal) {}

  async create(body: CreateAuthorDto) {
    return await this.dal.create(body);
  }

  async list() {
    return await this.dal.list();
  }

  async get(id: number) {
    return await this.dal.get(id);
  }

  async update(id: number, body: UpdateAuthorDto) {
    return await this.dal.update(id, body);
  }

  async remove(id: number) {
    return await this.dal.remove(id);
  }
}
