import {Component, OnInit} from '@angular/core';
import {bar_1, bar_2, bar_3, hamburger_button} from "./animations";

@Component({
    selector: 'hamburger-button',
    templateUrl: './hamburger-button.component.pug',
    styleUrls: ['./hamburger-button.component.scss'],
    animations: [hamburger_button, bar_1, bar_2, bar_3]
})
export class HamburgerButtonComponent implements OnInit {

    animation_state = 'default'

    constructor() {
    }

    ngOnInit() {
    }

}
