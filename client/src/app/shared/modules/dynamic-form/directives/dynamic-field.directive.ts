import {ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef} from "@angular/core";
import {FormButtonComponent} from "../components/form-button/form-button.component";
import {FormInputComponent} from "../components/form-input/form-input.component";
import {FormGroup} from "@angular/forms";

const components = {
    button: FormButtonComponent,
    input: FormInputComponent,
    // select: FormSelectComponent
};

@Directive({
    selector: '[dynamicField]'
})

export class DynamicFieldDirective implements OnInit {
    @Input() config;
    @Input() group: FormGroup;
    component;

    constructor(
        private container: ViewContainerRef,
        private resolver: ComponentFactoryResolver
    ) {
    }

    ngOnInit() {
        const component = components[this.config.type];
        const factory = this.resolver.resolveComponentFactory<any>(component);
        this.component = this.container.createComponent(factory);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group
    }
}