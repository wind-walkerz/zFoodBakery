import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesComponent} from './categories.component';
import {RouterModule} from '@angular/router';
import { ItemComponent } from './components/item/item.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: CategoriesComponent}])
    ],
    declarations: [CategoriesComponent, ItemComponent]
})
export class CategoriesModule {
}
