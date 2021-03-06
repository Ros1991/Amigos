import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: 'portal', pathMatch: 'full' },
    { path: 'portal', loadChildren: 'app/portal/portal.module' },
	{ path: 'login', loadChildren: 'app/login/login.module' },
    { path: 'signup', loadChildren: 'app/signup/signup.module' },
    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module' },
    { path: '404-page', loadChildren: 'app/404-page/404-page.module' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);