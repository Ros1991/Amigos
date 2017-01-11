import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [RouterModule, CommonModule],
	declarations: [SidebarComponent],
	exports: [SidebarComponent],
})

export class SidebarModule {}
