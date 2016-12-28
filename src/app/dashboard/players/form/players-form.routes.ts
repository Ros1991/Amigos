import { Route, RouterModule } from '@angular/router';
import { PlayersFormComponent } from './players-form.component';

const playersFormRoutes: Route[] = [
    { path: '', component: PlayersFormComponent }
];

export default RouterModule.forChild(playersFormRoutes);
