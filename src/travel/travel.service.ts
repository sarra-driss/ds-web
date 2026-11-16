import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto.js';
import { UpdateTravelDto } from './dto/update-travel.dto.js';

type Trip = {
  id: number;
  name: string;
  price: number;
  category?: string;
};

@Injectable()
export class TravelService {
  create(createTravelDto: CreateTravelDto) {
    return 'This action adds a new travel';
  }

  findAll(category?: string, search?: string): Trip[] {
return this.trips.filter((trip) => {
const categoryOk = !category ||
trip.category?.toLowerCase() === category.toLowerCase();
const searchOk = !search ||
trip.name.toLowerCase().includes(search.toLowerCase());
return categoryOk && searchOk;
});
}

  findOne(id: number) {
    const trip = this.trips.find((trip) => trip.id === id);
    if (!trip) {
      throw new NotFoundException(`Travel with ID ${id} not found`);
    }
    return trip;
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
  private trips: Trip[] = [
    {
      id: 1,
      name: 'To china',
      price: 9000,
    },
  ];
}
