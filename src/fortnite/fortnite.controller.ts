import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import Axios from 'axios';

@Controller('xbox')
export class FortniteController {
  name: string;
  age: number;
  breed: string;
  @Get('awesome')
  async GetPosts() {
    const request = await Axios.get('https://yts.mx/api/v2/list_movies.json');
    return request.data.data.movies;
  }

  @Post('lmao/:id')
  lmfao(@Param('id') id: number) {
    return { id };
  }

  @Get()
  async findAll(): Promise<any[]> {
    return [{ Alert: 'Lmao' }];
  }

  @Get('/:search')
  async GetMovies(@Param('search') search: string) {
    const request = await Axios.get(
      `https://yts.mx/api/v2/list_movies.json?query_term=${search}`,
    );
    const data = request.data.data.movies;
    return { data };
  }

  @Post('hello')
  SupLol() {
    return 'Hello u just made a post request';
  }

  @Post(':search')
  SearchLol(@Param('search') search: string) {
    return { search };
  }

  @Put('lmao')
  PutDatShit() {
    return 'Put request frfr';
  }

  @Delete(':id')
  DeleteLmao(@Param('id') id: string) {
    return `Sup man , are you ${id}?`;
  }
}
