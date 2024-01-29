import { Module } from '@nestjs/common';
import { BooksModule } from './components/books/books.module';
import { AuthorsModule } from './components/authors/authors.module';
import { DbModule } from './db/db.module';
import { GenresModule } from './components/genres/genres.module';

@Module({
  imports: [DbModule, GenresModule, AuthorsModule, BooksModule],
})
export class AppModule {}
