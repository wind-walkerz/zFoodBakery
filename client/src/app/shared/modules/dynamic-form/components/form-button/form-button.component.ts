import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'form-button',
    template: `
        <div class="form-field">
            <button type="submit">
                Submit
            </button>
        </div>
    `,
    styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {
    @Input() config: any[] = []

    constructor() {
    }

    ngOnInit() {
    }

}
