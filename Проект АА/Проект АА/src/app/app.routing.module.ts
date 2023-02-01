import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './Nenaydeno/not-found.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './Voenkomat/cars.component';

import { AboutMeComponent } from './Documents/about-me.component';
import { AddCarComponent } from './add-car/add-car.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      
      { path: 'cars', component: CarsComponent },
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutMeComponent },
      { path: 'addcar', component: AddCarComponent },
      { path: '**', component: NotFoundComponent },
      
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


