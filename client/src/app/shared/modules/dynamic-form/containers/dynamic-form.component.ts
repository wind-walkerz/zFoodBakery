import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import * as _ from 'lodash'

@Component({
    selector: 'dynamic-form',
    template: `
        <form
                class="dynamic-form"
                [formGroup]="form"
                (submit)="onSubmit($event)"
        >
            <ng-container
                    *ngFor="let field of config"
                    dynamicField
                    [config]="field"
                    [group]="form"
            ></ng-container>
        </form>
    `,
    styleUrls: ['./dynamic-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DynamicFormComponent implements OnInit {

    @Input() config: any[] = []

    form: FormGroup

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.createGroup()
    }

    createGroup = () => {
        const group = this.fb.group({});

        _.each(this.config, control => group.addControl(control.name, this.fb.control(null)))

        return group
    }

    onSubmit = e => {
        console.log(this.form.value)
    }

}
