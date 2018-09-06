import {Component, OnInit} from '@angular/core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.pug',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    faCoffee = faCoffee;

    constructor() {
    }

    ngOnInit() {
    }

    test = () => {
        console.log("dsfjskl")
    }

}
