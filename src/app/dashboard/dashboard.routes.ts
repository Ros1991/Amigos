import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Route[] = [
	{ 
		path: '', component: DashboardComponent,
		children: [
            { path: 'home', loadChildren: 'app/dashboard/home/home.module' },
			{ path: 'typography', loadChildren: 'app/dashboard/typography/typography.module' },
			{ path: 'grid', loadChildren: 'app/dashboard/grid/grid.module' },
			{ path: 'form', loadChildren: 'app/dashboard/form/form.module' },
			{ path: 'table', loadChildren: 'app/dashboard/table/table.module' },
			{ path: 'ui-element', loadChildren: 'app/dashboard/ui-elements/ui-elements.module' },
			{ path: 'charts', loadChildren: 'app/dashboard/charts/charts.module' },
			{ path: 'calendar', loadChildren: 'app/dashboard/calendar/calendar.module' },
			{ path: 'mail', loadChildren: 'app/dashboard/mail/mail.module' },
			{ path: 'profile', loadChildren: 'app/dashboard/profile/profile.module' },
			{ path: 'invoice', loadChildren: 'app/dashboard/invoice/invoice.module' },
            { path: 'blank-page', loadChildren: 'app/dashboard/blank-page/blank-page.module' },

            { path: 'players', loadChildren: 'app/dashboard/players/players.module' },
            { path: 'players/edit/:id', loadChildren: 'app/dashboard/players/form/players-form.module' },
            { path: 'players/new', loadChildren: 'app/dashboard/players/form/players-form.module' },
            { path: 'players/:allowEdit', loadChildren: 'app/dashboard/players/players.module' },

            { path: 'game', loadChildren: 'app/dashboard/game/game.module' },
            { path: 'games', loadChildren: 'app/dashboard/games/games.module' },
            { path: 'games/:year', loadChildren: 'app/dashboard/games/games.module' },
            { path: 'ranking', loadChildren: 'app/dashboard/games/games.module' },
            { path: 'ranking/:year', loadChildren: 'app/dashboard/ranking/ranking.module' }
		]
	}
];

export default RouterModule.forChild(dashboardRoutes)