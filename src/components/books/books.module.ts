import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BooksDal } from './books.dal';

@Module({
  controllers: [BooksController],
  providers: [BooksService, BooksDal],
})
export class BooksModule {}
