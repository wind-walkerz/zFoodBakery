import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'form-input',
    templateUrl: './form-input.component.pug',
    styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
    @Input() config: any[] = [];
    @Input() group: FormGroup

    constructor() {
    }

    ngOnInit() {
    }

}
