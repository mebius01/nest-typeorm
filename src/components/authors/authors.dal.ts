import { Injectable } from '@nestjs/common';
import { DBService } from 'src/db/db.service';
import { get, list } from './authors.sql';

@Injectable()
export class AuthorsDal {
  constructor() {}

  async create(payload) {
    try {
      const data = 'create';
      return data;
    } catch (error) {
      throw error;
    }
  }

  async list() {
    try {
      const data = 'list';
      return data;
    } catch (error) {
      throw error;
    }
  }

  async get(id: number) {
    try {
      const data = 'get';
      return data;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, payload) {
    try {
      const data = 'update'
      return data;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const data = 'delete'
      return data;
    } catch (error) {
      throw error;
    }
  }
}
