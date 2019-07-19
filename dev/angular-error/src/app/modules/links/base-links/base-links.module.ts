import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseLinksBaseLinkComponent} from './components/base-links-base-link/base-links-base-link.component';

const ENTRYCOMPONENTS = [
    BaseLinksBaseLinkComponent
];

@NgModule({
    entryComponents: [
        ...ENTRYCOMPONENTS
    ],
    declarations: [
        ...ENTRYCOMPONENTS
    ],
    exports: [
        ...ENTRYCOMPONENTS
    ],
    imports: [
        CommonModule
    ]
})
export class BaseLinksModule {}
