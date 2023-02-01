import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carlist:Car[] = []  
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    const car1 :Car = { 
      id: 1,
      brandName: "Lada",
      modelName: "2107",
      priceInRub: 3258
    }
    const car2 :Car = { 
      id: 2,
      brandName: "Lada",
      modelName: "2108",
      priceInRub: 3258
    }
    const car3 :Car = { 
      id: 3,
      brandName: "Lada",
      modelName: "2109",
      priceInRub: 3258
    }
    this.carService.addCar(car1);
    this.carService.addCar(car2);
    this.carService.addCar(car3);

    this.carlist = this.carService.getCars();

  }

}
