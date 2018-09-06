import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageComponent} from "./Image/Image";
import {RouterModule} from "@angular/router";
import {ButtonComponent} from "./Button/Button";

@NgModule({
    declarations: [
        ImageComponent,
        ButtonComponent
    ],
    imports: [RouterModule],
    exports: [
        ImageComponent,
        ButtonComponent
    ]
})
export class ComponentModule {
}
