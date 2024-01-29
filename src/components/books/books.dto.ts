import { PartialType } from '@nestjs/mapped-types';

export class CreateBookDto {
  title: string;
  publisher: number;
  authors: number[];
  genres: number[];
}

export class UpdateBookDto extends PartialType(CreateBookDto) {}
