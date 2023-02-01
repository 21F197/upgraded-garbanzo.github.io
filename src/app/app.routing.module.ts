import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './Nenaydeno/not-found.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './Voenkomat/cars.component';
import { CarComponent } from './spravochnik/car.component';
import { AboutMeComponent } from './Documents/about-me.component';
import { AddCarComponent } from './add-car/add-car.component';
import { SprkiComponent } from './sprki/sprki.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'car/:id', component: CarComponent },
      { path: 'adres', component: CarsComponent },
      { path: 'sprki', component: SprkiComponent },
      { path: 'home', component: HomeComponent },
      { path: 'dok', component: AboutMeComponent },
      { path: 'stat', component: AddCarComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


