import { Injectable } from '@nestjs/common';
import { CreateBookDto, UpdateBookDto } from './books.dto';
import { BooksDal } from './books.dal';

@Injectable()
export class BooksService {
  constructor(private readonly dal: BooksDal) {}

  async create(body: CreateBookDto) {
    return await this.dal.create(body);
  }

  async list() {
    return await this.dal.list();
  }

  async get(id: number) {
    return await this.dal.get(id);
  }

  async update(id: number, body: UpdateBookDto) {
    return await this.dal.update(id, body);
  }

  async remove(id: number) {
    return await this.dal.remove(id);
  }
}
