import { Injectable } from '@nestjs/common';
import { DBService } from 'src/db/db.service';

@Injectable()
export class GenresDal {
  constructor(private readonly db: DBService) {}

  async create(payload) {
    try {
      const data = ''
      return data;
    } catch (error) {
      throw error;
    }
  }

  async list() {
    try {
      const data = ''
      return data;
    } catch (error) {
      throw error;
    }
  }

  async get(id: number) {
    try {
      const data = ''
      return data;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, payload) {
    try {
      const data = ''
      return data;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const data = ''
      return data;
    } catch (error) {
      throw error;
    }
  }
}
