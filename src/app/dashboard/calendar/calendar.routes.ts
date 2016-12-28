import { Route, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';

const calendarRoutes: Route[] = [
    { path: '', component: CalendarComponent }
];

export default RouterModule.forChild(calendarRoutes);
