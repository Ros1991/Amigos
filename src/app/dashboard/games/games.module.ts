import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesComponent } from './games.component';
import gamesRoutes from './games.routes';

@NgModule({
  imports: [
    CommonModule,
    gamesRoutes
  ],
  declarations: [GamesComponent]
})
export default class GamesModule { }
