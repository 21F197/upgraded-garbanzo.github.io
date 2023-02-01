import { Injectable } from '@angular/core';

export interface Car {
  id: number;
  brandName: string;
  modelName: string;
  priceInRub: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[]=[];

  constructor() { }

  getCars(){
    return this.cars;
  }
  addCar(car: Car){
    this.cars.push(car);
  }
  getCar(id: number){
    return this.cars.find(car => car.id === id);
  }

}
