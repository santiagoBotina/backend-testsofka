import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Spaceship } from 'src/schemas/spaceship.schema';
import { CreateSpaceshipDto } from './dto/create-spaceship.dto';
import { FindSpaceshipDto } from './dto/findSpaceship.dto';
import { SpaceshipsService } from './spaceships.service';

@Controller('spaceships')
export class SpaceshipsController {
  constructor(private readonly spaceshipsService: SpaceshipsService) {}

  @Get()
  async getAll(): Promise<Spaceship[]> {
    return await this.spaceshipsService.getAll();
  }
  @Post()
  async createOne(@Body() dto: CreateSpaceshipDto) {
    return await this.spaceshipsService.createOne(dto);
  }
  @Get('/many')
  async getByParam(@Query() query) {
    console.log(query);
    return await this.spaceshipsService.getByParam(query);
  }
}
