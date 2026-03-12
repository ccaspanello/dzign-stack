import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { HelloService } from './hello.service';

@ApiTags('Hello')
@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  @ApiOkResponse({ schema: { type: 'string', example: 'Hello Earthlings!' } })
  getHello(): string {
    return this.helloService.getHello();
  }
}
