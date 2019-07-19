import {Component} from '@angular/core';
import {BaseLinksBaseLinkComponent} from '../../../base-links/components/base-links-base-link/base-links-base-link.component';

@Component({
    selector: 'app-client-links-help',
    templateUrl: '../../../base-links/components/base-links-base-link/base-links-base-link.component.html'
})
export class ClientLinksHelpComponent extends BaseLinksBaseLinkComponent {
    public target = '#/client/help';
    public linkText = 'Help';

    constructor() {
        super();
    }
}
