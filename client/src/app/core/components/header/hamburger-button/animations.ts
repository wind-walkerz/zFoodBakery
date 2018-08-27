import {state, style, trigger} from "@angular/animations";

export const hamburger_button =
    trigger('hamburger_button', [
        state('clicked', style({
            justifyContent: 'center'
        }))
    ])

export const bar_1 =
    trigger('bar_1', [
        state('clicked', style({
            height: '1px'
        }))
    ])

export const bar_2 =
    trigger('bar_2', [
        state('clicked', style({
            display: 'none'
        }))
    ])

export const bar_3 =
    trigger('bar_3', [
        state('clicked', style({
            height: '1px'
        }))
    ])