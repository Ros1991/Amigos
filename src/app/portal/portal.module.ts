import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalComponent } from './portal.component';
import portalRoutes from './portal.routes';
import { TopNavModule, SidebarModule } from '../shared/index';


@NgModule({
  imports: [
    CommonModule,
      portalRoutes,
      TopNavModule,
      SidebarModule
  ],
  declarations: [PortalComponent]
})
export default class PortalModule { }
