import {Component, Input, OnInit} from '@angular/core';
import {bar_1, bar_2, bar_3} from "./animations";

@Component({
    selector: 'hamburger-button',
    templateUrl: './hamburger-button.component.pug',
    styleUrls: ['./hamburger-button.component.scss'],
    animations: [bar_1, bar_2, bar_3]
})

export class HamburgerButtonComponent implements OnInit {

    @Input() animated = false

    constructor() {
    }

    ngOnInit() {
    }

}
