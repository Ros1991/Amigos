import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form.component';
import formRoutes from './form.routes';

@NgModule({
  imports: [
    CommonModule,
    formRoutes
  ],
  declarations: [FormComponent]
})
export default class FormModule { }
