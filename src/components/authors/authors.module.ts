import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { AuthorsDal } from './authors.dal';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService, AuthorsDal],
})
export class AuthorsModule {}
