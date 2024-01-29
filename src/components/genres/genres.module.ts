import { Module } from '@nestjs/common';
import { GenresController } from './genres.controller';
import { GenresDal } from './genres.dal';
import { GenresService } from './genres.service';

@Module({
  controllers: [GenresController],
  providers: [GenresService, GenresDal],
})
export class GenresModule {}
