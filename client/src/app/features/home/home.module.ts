import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from "@angular/router";
import {BannerComponent} from './01. banner/banner.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [
        HomeComponent,
        BannerComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '', component: HomeComponent
        }]),

        SharedModule
    ]

})
export class HomeModule {
}
