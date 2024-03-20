import { CreateCatDto } from './dto/create-cat.dto';

import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Bind,
} from '@nestjs/common';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  @Bind(Body())
  create(createCatDto: CreateCatDto) {
    createCatDto;
    return 'This action adds a new cat';
  }

  @Get()
  @Bind(Query())
  findAll(query: any) {
    console.log(query);
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  @Bind(Param('id'))
  findOne(id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  @Bind(Param('id'), Body())
  update(id: string, updateCatDto: UpdateCatDto) {
    updateCatDto;
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  @Bind(Param('id'))
  remove(id: string) {
    return `This action removes a #${id} cat`;
  }
}
