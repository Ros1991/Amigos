import { Route, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';

const chartsRoutes: Route[] = [
    {
    	path: '', component: ChartsComponent,
    	children: [
			{ path: 'chart-js', loadChildren: 'app/dashboard/charts/chart-js/chart-js.module' },
			{ path: 'c3-chart', loadChildren: 'app/dashboard/charts/c3-chart/c3-chart.module' }
		]
    }
];

export default RouterModule.forChild(chartsRoutes);
