import {Component} from '@angular/core';

@Component({
    selector: 'app-client-help',
    templateUrl: './client-help.component.html',
})
export class ClientHelpComponent {
    public showNavigation = false;

    public toggleNavigation(): void {
        this.showNavigation = !this.showNavigation;
    }

    public closeNavigation(): void {
        this.showNavigation = false;
    }
}
