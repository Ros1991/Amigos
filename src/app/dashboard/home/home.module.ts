import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ng2-bootstrap';
import { HomeComponent } from './home.component';
import homeRoutes from './home.routes';

import { TodoModule, StatsModule } from '../../widgets/index';

@NgModule({
  imports: [
    CommonModule,
    TodoModule,
    StatsModule,
      homeRoutes,
      CarouselModule
  ],
  declarations: [HomeComponent]
})
export default class HomeModule { }
