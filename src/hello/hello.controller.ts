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
import { HelloService } from './hello.service';

@Controller('/hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
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
