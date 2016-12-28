import { Route, RouterModule } from '@angular/router';
import { BootstrapTableComponent } from './bootstrap-table.component';

const bootstrapTableRoutes: Route[] = [
    { path: '', component: BootstrapTableComponent }
];

export default RouterModule.forChild(bootstrapTableRoutes);
