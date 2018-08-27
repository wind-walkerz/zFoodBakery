import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {SharedModule} from "../../../shared/shared.module";
import {RouterModule} from "@angular/router";
import { HamburgerButtonComponent } from './hamburger-button/hamburger-button.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    declarations: [HeaderComponent, HamburgerButtonComponent],
    exports: [HeaderComponent]
})
export class HeaderModule {
}
