import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageComponent} from "./Image/Image";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        ImageComponent
    ],
    imports: [RouterModule],
    exports: [
        ImageComponent
    ]
})
export class ComponentModule {
}
