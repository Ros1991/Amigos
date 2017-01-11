import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RankingComponent } from './ranking.component';
import rankingRoutes from './ranking.routes';

@NgModule({
  imports: [
    CommonModule,
      rankingRoutes,
      MaterialModule.forRoot()
  ],
  declarations: [RankingComponent]
})
export default class RankingModule { }
