import { Route, RouterModule } from '@angular/router';
import { PlayersComponent } from './players.component';

const playersRoutes: Route[] = [
    {
        path: '', component: PlayersComponent
        //children: [
        //    { path: 'form', loadChildren: 'app/dashboard/players/form/players-form.module' }
        //]
    }
];

export default RouterModule.forChild(playersRoutes);
