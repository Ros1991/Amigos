import { Route, RouterModule } from '@angular/router';
import { ChartJsComponent } from './chart-js.component';

const chartJsRoutes: Route[] = [
    { path: '', component: ChartJsComponent }
];

export default RouterModule.forChild(chartJsRoutes);
