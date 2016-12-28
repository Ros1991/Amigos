import { Route, RouterModule } from '@angular/router';
import { FormElementComponent } from './form-element.component';

const formElementRoutes: Route[] = [
    { path: '', component: FormElementComponent }
];

export default RouterModule.forChild(formElementRoutes);
