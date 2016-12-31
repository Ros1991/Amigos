import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { GamesComponent } from './games.component';
import gamesRoutes from './games.routes';

@NgModule({
  imports: [
    CommonModule,
      gamesRoutes,
      MaterialModule.forRoot()
  ],
  declarations: [GamesComponent]
})
export default class GamesModule { }
