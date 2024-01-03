import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  Testing() {
    return 'Yo sup dawg';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `${id} frfr`;
  }

  @Post()
  TestPost(@Body() user: object) {
    return { user };
  }

  @Post(':id')
  Lmao(@Param('id') id: string) {
    return `${id} Posting to this ID`;
  }

  @Patch(' :id ')
  TestingPut(@Param('id') id: string) {
    return { id };
  }

  @Delete()
  DeleteMfs(@Body('data') data: JSON) {
    return `Delete them all ${data} `;
  }
}
