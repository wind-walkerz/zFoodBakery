import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'nav',
    templateUrl: './nav.component.pug',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    openDropdown = false

    constructor() {
    }

    ngOnInit() {
    }

    toggleFocused = () => {
        this.openDropdown = !this.openDropdown
    }

}
