import { City } from './city.model';

export class Order {
    constructor(public city: City,
        public numBookings: number) { }
}