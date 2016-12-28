import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsComponent } from './charts.component';
import chartsRoutes from './charts.routes';

@NgModule({
  imports: [
    CommonModule,
    chartsRoutes
  ],
  declarations: [ChartsComponent]
})
export default class ChartsModule { }
