import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseLinksModule} from '../base-links/base-links.module';
import {ClientLinksHelpComponent} from './components/client-links-help/client-links-help.component';
import {ClientLinksSettingsComponent} from './components/client-links-settings/client-links-settings.component';

const COMPONENTS: any = [
    ClientLinksHelpComponent,
    ClientLinksSettingsComponent,
];

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    entryComponents: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ],
    imports: [
        CommonModule,
        BaseLinksModule,
    ],
})
export class ClientLinksModule {}
