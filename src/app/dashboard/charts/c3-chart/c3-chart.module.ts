import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C3ChartComponent } from './c3-chart.component';
import c3ChartRoutes from './c3-chart.routes';

@NgModule({
  imports: [
    CommonModule,
    c3ChartRoutes
  ],
  declarations: [C3ChartComponent]
})
export default class C3ChartModule { }
