import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'Image',
    template: `
        <img src="{{ src }}" alt="">
    `,
    styles: [`
        img {
            display: flex;
            flex: 1;
            max-width: 100%;
        }
    `]
})
export class ImageComponent implements OnInit {

    @Input() src: String = '';

    constructor() {
    }

    ngOnInit() {
    }

}
