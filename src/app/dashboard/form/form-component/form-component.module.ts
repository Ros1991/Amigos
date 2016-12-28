import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'ng2-datepicker/ng2-datepicker';

import { FormCmpComponent } from './form-component.component';
import formComponentRoutes from './form-component.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    formComponentRoutes
  ],
  declarations: [FormCmpComponent, DatePicker]
})
export default class FormComponentModule {}
