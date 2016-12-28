import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from './calendar.component';
import calendarRoutes from './calendar.routes';

@NgModule({
  imports: [
    CommonModule,
    calendarRoutes
  ],
  declarations: [CalendarComponent]
})
export default class CalendarModule { }
