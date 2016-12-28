import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapTableComponent } from './bootstrap-table.component';
import bootstrapTableRoutes from './bootstrap-table.routes';

@NgModule({
  imports: [
    CommonModule,
    bootstrapTableRoutes
  ],
  declarations: [BootstrapTableComponent]
})
export default class BootstrapTableModule { }
