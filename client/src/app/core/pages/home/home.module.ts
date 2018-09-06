import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './pages/home.component';
import {BannerComponent} from './components/banner/banner.component';
import {SharedModule} from "../../../shared/shared.module";
import {SearchInputComponent} from "./components/banner/search-input/search-input.component";

@NgModule({
    declarations: [
        HomeComponent,

        BannerComponent,
        SearchInputComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]

})
export class HomeModule {
}
