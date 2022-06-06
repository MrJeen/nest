import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';

import { ApiBearerAuth, ApiTags, ApiQuery, ApiResponse } from '@nestjs/swagger';

import { HelloService } from './hello.service';

@ApiBearerAuth()
@ApiTags('hello')
@Controller('/hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  @ApiQuery({ name: 'id', required: true })
  @ApiResponse({
    status: 200,
    description: 'get...',
  })
  fetch(@Query() { id }): string {
    return this.helloService.fetch(id);
  }

  @Post()
  post(@Body() { message }): string {
    return this.helloService.fetch(message);
  }

  @Put(':id')
  put(@Param() { id }, @Body() { message }): string {
    return this.helloService.put(id, message);
  }

  @Delete()
  delete(@Query() { id }): string {
    return this.helloService.delete(id);
  }
}
