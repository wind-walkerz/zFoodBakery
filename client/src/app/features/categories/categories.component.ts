import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.pug',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {
    products = [
        5, 6, 7, 8, 9
    ];

  constructor() { }

  ngOnInit() {
  }

}
