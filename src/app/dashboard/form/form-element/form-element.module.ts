import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormElementComponent } from './form-element.component';
import formElementRoutes from './form-element.routes';

@NgModule({
  imports: [
    CommonModule,
    formElementRoutes
  ],
  declarations: [FormElementComponent]
})
export default class FormElementModule { }
