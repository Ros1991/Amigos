import { Route, RouterModule } from '@angular/router';
import { GamesComponent } from './games.component';

const gamesRoutes: Route[] = [
    { path: '', component: GamesComponent }
];

export default RouterModule.forChild(gamesRoutes);
