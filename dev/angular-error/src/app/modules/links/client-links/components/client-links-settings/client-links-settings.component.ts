import {Component} from '@angular/core';
import {BaseLinksBaseLinkComponent} from '../../../base-links/components/base-links-base-link/base-links-base-link.component';

@Component({
    selector: 'app-client-links-settings',
    templateUrl: '../../../base-links/components/base-links-base-link/base-links-base-link.component.html'
})
export class ClientLinksSettingsComponent extends BaseLinksBaseLinkComponent {
    public target = '#/client/settings';
    public linkText = 'Settings';

    constructor() {
        super();
    }
}
