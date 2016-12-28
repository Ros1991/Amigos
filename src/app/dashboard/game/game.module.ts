import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragulaModule} from 'ng2-dragula';
import { GameComponent } from './game.component';
import gameRoutes from './game.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
      gameRoutes,
      DragulaModule,
      FormsModule
    ],
  declarations: [GameComponent]
})
export default class GameModule { }
