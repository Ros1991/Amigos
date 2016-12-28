import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypographyComponent } from './typography.component';
import typographyRoutes from './typography.routes';

@NgModule({
  imports: [
    CommonModule,
    typographyRoutes
  ],
  declarations: [TypographyComponent]
})
export default class TypographyModule { }
