import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  fetch(id: number): string {
    return `Hello World! ${id}`;
  }

  post(message: string): string {
    return `create success with ${message}`;
  }

  put(id: number, message: string): string {
    return `update success to ${id}: ${message}`;
  }

  delete(id: number): string {
    return `delete success to ${id}`;
  }
}
