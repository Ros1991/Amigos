import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlayersFormComponent } from './players-form.component';
import playersFormRoutes from './players-form.routes';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
    playersFormRoutes
  ],
  declarations: [PlayersFormComponent]
})
export default class PlayersFormModule { }
