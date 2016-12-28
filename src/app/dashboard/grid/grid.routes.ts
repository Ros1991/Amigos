import { Route, RouterModule } from '@angular/router';
import { GridComponent } from './grid.component';

const gridRoutes: Route[] = [
    { path: '', component: GridComponent }
];

export default RouterModule.forChild(gridRoutes);
