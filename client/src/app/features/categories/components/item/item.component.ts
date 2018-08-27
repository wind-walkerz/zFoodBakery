import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'item',
    templateUrl: './item.component.pug',
    styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

    @Input() data: any = null;

    constructor() {
    }

    ngOnInit() {
        console.log(this.data)
    }

}
