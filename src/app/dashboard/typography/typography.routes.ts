import { Route, RouterModule } from '@angular/router';
import { TypographyComponent } from './typography.component';

const typographyRoutes: Route[] = [
    { path: '', component: TypographyComponent }
];

export default RouterModule.forChild(typographyRoutes);
