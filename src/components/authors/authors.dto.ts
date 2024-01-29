import { PartialType } from '@nestjs/mapped-types';

export class CreateAuthorDto {
  author_name: string;
}

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {}
