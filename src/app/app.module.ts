import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AboutMeComponent } from './Documents/about-me.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarComponent } from './spravochnik/car.component';
import { CarsComponent } from './Voenkomat/cars.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './Nenaydeno/not-found.component';
import { SprkiComponent } from './sprki/sprki.component';

@NgModule({
  declarations: [ AppComponent, AboutMeComponent, AddCarComponent, CarComponent, CarsComponent, HomeComponent, NotFoundComponent, SprkiComponent ],
  imports: [ 
    AppRoutingModule, 
    BrowserModule, FormsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
