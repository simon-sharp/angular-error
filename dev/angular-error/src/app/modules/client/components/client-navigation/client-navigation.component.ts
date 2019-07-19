import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-client-navigation',
    templateUrl: './client-navigation.component.html',
})
export class ClientNavigationComponent {
    @Output()
    public closeNavigation: EventEmitter<any> = new EventEmitter<any>();

    public closeClicked(): void {
        if (this.closeNavigation) {
            this.closeNavigation.emit();
        }
    }
}
