import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Spaceship, SpaceshipDocument } from 'src/schemas/spaceship.schema';
import { CreateSpaceshipDto } from './dto/create-spaceship.dto';
import { FindSpaceshipDto } from './dto/findSpaceship.dto';

@Injectable()
export class SpaceshipsService {
  constructor(
    @InjectModel(Spaceship.name)
    private spaceshipModel: Model<SpaceshipDocument>,
  ) {}
  async getAll(): Promise<Spaceship[]> {
    const spaceships: Spaceship[] = await this.spaceshipModel.find();
    return spaceships;
  }

  async createOne(dto: CreateSpaceshipDto): Promise<Spaceship> {
    const newDocument = new this.spaceshipModel(dto);
    if (dto.fuel == 'Petróleo refinado') {
      newDocument.type = 'Lanzadera';
    } else if (dto.fuel == 'Celdas fotovoltaicas') {
      newDocument.type = 'No tripulada';
    } else if (dto.fuel == 'Sólido' || dto.fuel == 'NO4 + UDMH') {
      newDocument.type = 'Tripulada';
    }
    return newDocument.save();
  }

  async getByParam(dto: FindSpaceshipDto): Promise<Spaceship[]> {
    if (dto.property === 'name') {
      const result: Spaceship[] = await this.spaceshipModel.find({
        name: dto.value,
      });
      return result;
    } else if (dto.property == 'type') {
      const result: Spaceship[] = await this.spaceshipModel.find({
        type: dto.value,
      });
      return result;
    } else if (dto.property == 'fuel') {
      const result: Spaceship[] = await this.spaceshipModel.find({
        fuel: dto.value,
      });
      return result;
    }
  }
}
