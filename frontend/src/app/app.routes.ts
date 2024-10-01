import { Routes } from '@angular/router';
import { GolfStore } from '@shared/golf.store';
import { LEARNING_ROUTES } from './learning/routes';
import { DashboardComponent } from './pages/dashboard.component';
import { HomeComponent } from './pages/home.component';
import { userLoggedInGuard } from '@shared/route.guards';

export const routes: Routes = [
  // ok, all the routes for the app...
  {
    path: '', // '', '/learning'

    component: HomeComponent,
    pathMatch: 'prefix',
    providers: [GolfStore],
    children: [
      // {
      //   path: 'dashboard',
      //   component: DashboardComponent,
      // },
      ...LEARNING_ROUTES,
      {
        path: 'halloween',
        canActivate: [userLoggedInGuard()],
        loadChildren: () =>
          import('./halloween/halloween.routes').then(
            (r) => r.HALLOWEEN_ROUTES
          ),
      },
      {
        // a catchall has to be last.
        path: '**',
        component: DashboardComponent,
      },
    ],
  },
];
