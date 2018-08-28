import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {SharedModule} from "../../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {HamburgerButtonComponent} from './components/nav/hamburger-button/hamburger-button.component';
import {NavComponent} from './components/nav/nav.component';
import {SiteNavigationComponent} from './components/nav/site-navigation/site-navigation.component';

@NgModule({

    declarations: [
        HeaderComponent,
        HamburgerButtonComponent,
        NavComponent,
        SiteNavigationComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    exports: [HeaderComponent]
})
export class HeaderModule {
}
