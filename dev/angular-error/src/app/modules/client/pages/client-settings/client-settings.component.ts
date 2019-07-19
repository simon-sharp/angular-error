import {Component, OnInit} from '@angular/core';

declare var cordova: any;

@Component({
    selector: 'app-client-settings',
    templateUrl: './client-settings.component.html',
})
export class ClientSettingsComponent  {
    public showNavigation = false;

    public toggleNavigation(): void {
        this.showNavigation = !this.showNavigation;
    }

    public closeNavigation(): void {
        this.showNavigation = false;
    }
}
