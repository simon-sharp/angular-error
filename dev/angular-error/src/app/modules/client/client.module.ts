import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ClientHelpComponent} from './pages/client-help/client-help.component';
import {ClientSettingsComponent} from './pages/client-settings/client-settings.component';
import {ClientRoutingModule} from './client-routing.module';
import {ClientNavigationComponent} from './components/client-navigation/client-navigation.component';
import {ClientLinksModule} from '../links/client-links/client-links.module';

const COMPONENTS: any[] = [
    ClientHelpComponent,
    ClientSettingsComponent,
];

const ENTRY_COMPONENTS: any[] = [
    ClientNavigationComponent
];

@NgModule({
    declarations: [
        ...COMPONENTS,
        ...ENTRY_COMPONENTS,
    ],
    entryComponents: [
        ENTRY_COMPONENTS,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ClientRoutingModule,
        ClientLinksModule,
    ],
})
export class ClientModule {}
