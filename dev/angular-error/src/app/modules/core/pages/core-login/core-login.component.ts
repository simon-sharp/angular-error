import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-core-login',
    templateUrl: './core-login.component.html',
})
export class CoreLoginComponent {
    public username = '';
    public password = '';

    constructor(
        public router: Router
    ) {}

    public loginClick(): void {
        this.router.navigate(['client']);
    }
}
