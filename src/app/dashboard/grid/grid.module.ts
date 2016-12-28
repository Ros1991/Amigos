import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid.component';
import gridRoutes from './grid.routes';

@NgModule({
  imports: [
    CommonModule,
    gridRoutes
  ],
  declarations: [GridComponent]
})
export default class GridModule { }
