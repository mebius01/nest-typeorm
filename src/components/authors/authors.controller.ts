import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto, UpdateAuthorDto } from './authors.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  create(@Body() body: CreateAuthorDto) {
    return this.authorsService.create(body);
  }

  @Get()
  list() {
    return this.authorsService.list();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.authorsService.get(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateAuthorDto) {
    return this.authorsService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorsService.remove(+id);
  }
}
