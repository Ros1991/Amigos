import { Route, RouterModule } from '@angular/router';
import { TableComponent } from './table.component';

const tableRoutes: Route[] = [
    { 
        path: '', component: TableComponent,
        children: [
            { path: 'bootstrap-table', loadChildren: 'app/dashboard/table/bootstrap-table/bootstrap-table.module' },
            { path: 'data-table', loadChildren: 'app/dashboard/table/data-table/data-table.module' }
        ]
    }
];

export default RouterModule.forChild(tableRoutes);
