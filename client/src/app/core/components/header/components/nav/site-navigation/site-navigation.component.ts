import {Component, Input, OnInit} from '@angular/core';
import {menu} from './animations'

@Component({
  selector: 'site-navigation',
  templateUrl: './site-navigation.component.pug',
  styleUrls: ['./site-navigation.component.scss'],
    animations: [menu]
})
export class SiteNavigationComponent implements OnInit {
    @Input() animated = false
  constructor() { }

  ngOnInit() {
  }

}
