import { Route, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

const profileRoutes: Route[] = [
    { path: '', component: ProfileComponent }
];

export default RouterModule.forChild(profileRoutes);
