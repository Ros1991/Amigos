import { Route, RouterModule } from '@angular/router';
import { FormCmpComponent } from './form-component.component';

const FormComponentRoutes: Route[] = [
	{ path: '', component: FormCmpComponent }
];

export default RouterModule.forChild(FormComponentRoutes);
