import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-base-link',
    templateUrl: './base-links-base-link.component.html'
})
export class BaseLinksBaseLinkComponent {
    @Input()
    public target = '/';

    @Input()
    public linkText = 'Link';

    @Input()
    public showLinkText = true;

    public getLinkText(): string {
        return this.linkText;
    }
}
