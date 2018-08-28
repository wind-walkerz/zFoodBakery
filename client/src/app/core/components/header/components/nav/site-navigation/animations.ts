import {animate, group, keyframes, query, stagger, state, style, transition, trigger} from "@angular/animations";

export const menu =
    trigger('menu', [
        state('default', style({
            height: '0px',
        })),
        state('focused', style({
            height: '20em',
        })),
        transition('default => focused', [
            animate('300ms ease-in', style({height: '20em'})),
            query('.menu-item', [
                animate(300, style({
                    display: 'flex'
                }))
            ])
        ]),
        transition('focused => default', [
            animate('300ms ease-out', style({height: '0px'}))
        ])
    ])