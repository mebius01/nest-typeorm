import { PartialType } from '@nestjs/mapped-types';

export class CreateGenreDto {
  genre_name: string;
}

export class UpdateGenreDto extends PartialType(CreateGenreDto) {}
