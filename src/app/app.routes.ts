import { Routes } from '@angular/router';

import { CampaignListComponent, LoginComponent, MainComponent } from './components';

import { AuthGuard, NoAuthGuard } from './guards';

import { AuthUserResolverService } from './resolvers';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NoAuthGuard],
    },
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        resolve: {
            authResolver: AuthUserResolverService
        },
        
        children: [
            {
                path: '',
                component: CampaignListComponent,
            },
        ]
    }
];
