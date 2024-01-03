import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import Axios from 'axios';

@Controller('home')
export class HomeController {
  @Get(':id')
  async getById(@Param('id') id: number) {
    const data = await Axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );
    const what = data.data;
    return { what };
  }

  @Get('search/:term')
  async getBySearchTerm(@Param('term') term: string) {
    return { term };
  }

  @Delete(':id')
  DeleteUser(@Param('id') id: number, @Body() body: any): string {
    return `${body} with ID ${id}`;
  }
  @Post()
  lmaoSend(@Body() body: { name: string; password: string }): {
    name: string;
    password: string;
  } {
    const { name, password } = body;
    return { name, password };
  }

  @Post(':id')
  PostBodyAndID(
    @Body() body: { username: string; password: string },
    @Param('id') id: string,
  ) {
    const { username, password } = body;
    if (!username || !password) return 'No username/password found';

    return `ID ${id} and username is ${username} with password ${password}`;
  }
}
