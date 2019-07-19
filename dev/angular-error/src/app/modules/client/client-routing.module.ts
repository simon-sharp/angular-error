import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientSettingsComponent} from './pages/client-settings/client-settings.component';
import {ClientHelpComponent} from './pages/client-help/client-help.component';

const routes: Routes = [
    {
        path: '',
        component: ClientSettingsComponent,
    },
    {
        path: 'settings',
        component: ClientSettingsComponent,
    },
    {
        path: 'help',
        component: ClientHelpComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule {
}
