import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto, UpdateGenreDto } from './genres.dto';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  create(@Body() body: CreateGenreDto) {
    return this.genresService.create(body);
  }

  @Get()
  list() {
    return this.genresService.list();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.genresService.get(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateGenreDto) {
    return this.genresService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genresService.remove(+id);
  }
}
