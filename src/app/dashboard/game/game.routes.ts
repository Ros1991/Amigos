import { Route, RouterModule } from '@angular/router';
import { GameComponent } from './game.component';

const gameRoutes: Route[] = [
    { path: '', component: GameComponent }
];

export default RouterModule.forChild(gameRoutes);
