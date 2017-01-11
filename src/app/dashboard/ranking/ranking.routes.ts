import { Route, RouterModule } from '@angular/router';
import { RankingComponent } from './ranking.component';

const rankingRoutes: Route[] = [
    { path: '', component: RankingComponent }
];

export default RouterModule.forChild(rankingRoutes);
