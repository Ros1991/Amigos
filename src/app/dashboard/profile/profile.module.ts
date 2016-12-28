import { NgModule } from '@angular/core';
import { ProfileComponent} from './profile.component';
import profileRoutes from './profile.routes';

@NgModule({
    imports: [profileRoutes],
    declarations: [ProfileComponent]
})

export default class ProfileModule { }
