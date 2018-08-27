import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentModule} from "./components/component.module";

@NgModule({
    imports: [
        CommonModule,
        ComponentModule
    ],
    exports: [ComponentModule]
})
export class SharedModule {
}
