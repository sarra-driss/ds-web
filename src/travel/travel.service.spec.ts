import { NotFoundException } from '@nestjs/common';
import { TravelService } from './travel.service.js';

describe('TravelService', () => {
  let travelService: TravelService;

  beforeEach(() => {
    travelService = new TravelService();
  });

  it('returns a travel by id', () => {
    expect(travelService.findOne(1)).toEqual({
      id: 1,
      name: 'To china',
      price: 9000,
    });
  });

  it('throws NotFoundException when the id does not exist', () => {
    expect(() => travelService.findOne(999)).toThrow(NotFoundException);
  });
});
