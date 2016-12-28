import { Route, RouterModule } from '@angular/router';
import { C3ChartComponent } from './c3-chart.component';

const c3ChartRoutes: Route[] = [
    { path: '', component: C3ChartComponent }
];

export default RouterModule.forChild(c3ChartRoutes);
