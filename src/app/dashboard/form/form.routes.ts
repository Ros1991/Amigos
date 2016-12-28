import { Route, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';

const formRoutes: Route[] = [
    { 
        path: '', component: FormComponent,
        children: [
            { path: 'elements', loadChildren: 'app/dashboard/form/form-element/form-element.module' },
            { path: 'components', loadChildren: 'app/dashboard/form/form-component/form-component.module' }
        ]
    }
];

export default RouterModule.forChild(formRoutes);
