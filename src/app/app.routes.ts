import { Routes } from '@angular/router';

import {
    LoginComponent, MainComponent,
    CampaignListComponent, CampaignDetailComponent,
    MonsterListComponent,
    MaterialListComponent,
    WeaponListComponent,
    ArmourListComponent,
    DocumentListComponent
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
            {
                path: 'monster',
                component: MonsterListComponent,
            },
            {
                path: 'material',
                component: MaterialListComponent,
            },
            {
                path: 'weapon',
                component: WeaponListComponent,
            },
            {
                path: 'armour',
                component: ArmourListComponent,
            },
            {
                path: 'document',
                component: DocumentListComponent,
            },
        ]
    }
];
