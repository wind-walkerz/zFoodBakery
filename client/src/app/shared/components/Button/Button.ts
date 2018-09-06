import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'btn',
    template: `        
            <ng-content></ng-content>
    `,
    styles: [`
        :host {
            border: 1px solid black;
            border-radius: 0.4rem;
            cursor:pointer;
            color: #333;
            font-family: "Wacca";
            font-size: 1.6rem;
            font-weight: normal;
            padding: 0.5rem 1rem;
        }
    `]
})
export class ButtonComponent implements OnInit {


    constructor() {
    }

    ngOnInit() {
    }

}
