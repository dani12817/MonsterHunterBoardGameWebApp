import { Routes } from '@angular/router';

import {
    LoginComponent, MainComponent,
    CampaignListComponent, CampaignDetailComponent
 } from './components';

import { AuthGuard, NoAuthGuard } from './guards';

import { 
    AuthUserResolverService, 
    CampaignResolverService, 
    CampaignMaterialsResolverService, CampaignQuestsResolverService, CampaignHunterResolverService 
} from './resolvers';

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
            {
                path: 'campaign/:uid',
                component: CampaignDetailComponent,
                canActivate: [AuthGuard],
                resolve: {
                    campaignData: CampaignResolverService,
                    campaignMaterialsData: CampaignMaterialsResolverService,
                    campaignQuestsData: CampaignQuestsResolverService,
                    campaignHuntersData: CampaignHunterResolverService
                }
            },
        ]
    }
];
