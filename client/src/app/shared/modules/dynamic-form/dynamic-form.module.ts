import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicFormComponent} from './containers/dynamic-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormInputComponent} from './components/form-input/form-input.component';
import {FormButtonComponent} from "./components/form-button/form-button.component";
import {DynamicFieldDirective} from "./directives/dynamic-field.directive";

@NgModule({
    declarations: [
        DynamicFormComponent,

        FormInputComponent,
        FormButtonComponent,

        DynamicFieldDirective
    ],
    entryComponents: [
        FormInputComponent,
        FormButtonComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        DynamicFormComponent
    ]
})
export class DynamicFormModule {
}
