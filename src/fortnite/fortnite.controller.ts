import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import Axios from 'axios';

@Controller('fortnite')
export class FortniteController {
  @Get('awesome')
  async GetPosts() {
    const request = await Axios.get('https://yts.mx/api/v2/list_movies.json');
    return request.data.data.movies;
  }

  @Get('/:search')
  async GetMovies(@Param('search') search: string) {
    const request = await Axios.get(
      `https://yts.mx/api/v2/list_movies.json?query_term=${search}`,
    );
    return { request };
  }

  @Post('hello')
  SupLol() {
    return 'Hello u just made a post request';
  }

  @Post(':search')
  SearchLol(@Param('search') search: string) {
    return { search };
  }

  @Delete(':id')
  DeleteLmao(@Param('id') id: string) {
    return `Sup man , are you ${id}?`;
  }
}
