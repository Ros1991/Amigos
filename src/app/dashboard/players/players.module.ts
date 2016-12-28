import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersComponent } from './players.component';
import playersRoutes from './players.routes';

@NgModule({
  imports: [
    CommonModule,
    playersRoutes
  ],
  declarations: [PlayersComponent]
})
export default class PlayersModule { }
