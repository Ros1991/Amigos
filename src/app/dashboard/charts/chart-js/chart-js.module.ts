import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Chart} from 'ng2-charts/ng2-charts';
import { ChartJsComponent } from './chart-js.component';
import chartJsRoutes from './chart-js.routes';

@NgModule({
  imports: [
    CommonModule,
    Chart,
    chartJsRoutes
  ],
  declarations: [ChartJsComponent]
})
export default class ChartJsModule { }
