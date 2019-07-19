import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CoreLoginComponent} from './pages/core-login/core-login.component';
import {ClientLinksModule} from '../links/client-links/client-links.module';

const PAGES: any[] = [
    CoreLoginComponent,
];

@NgModule({
    declarations: [
        ...PAGES
    ],
    imports: [
        FormsModule,
        ClientLinksModule
    ]
})
export class CoreModule {}
