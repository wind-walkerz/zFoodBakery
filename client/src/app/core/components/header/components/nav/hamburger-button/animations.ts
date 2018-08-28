import {animate, group, keyframes, query, stagger, state, style, transition, trigger} from "@angular/animations";

export const bar_1 =
    trigger('bar_1', [
        state('default', style({})),
        state('animated', style({
            transform: 'translateY(345%) rotate(45deg)'
        })),
        transition('default => animated', [
            animate(300, keyframes([
                style({
                    transform: 'translateY(345%) ',
                    offset: 0.4
                }),
                style({
                    transform: 'translateY(345%)',
                    offset: 0.8
                }),
                style({
                    transform: 'translateY(345%) rotate(45deg)',
                    offset: 1
                })
            ]))
        ]),
        transition('animated => default', [
            animate(300, keyframes([
                style({
                    transform: 'translateY(345%) rotate(0)',
                    offset: 0.2
                }),
                style({
                    transform: 'translateY(345%)',
                    offset: 0.6
                }),
                style({
                    transform: 'none',
                    offset: 1
                })
            ]))

        ])
    ])

export const bar_2 =
    trigger('bar_2', [
        state('default', style({})),
        state('animated', style({
            opacity: 0
        })),
        transition('animated => default', [
            animate(300)
        ])
    ])

export const bar_3 =
    trigger('bar_3', [
        state('default', style({})),
        state('animated', style({
            transform: 'translateY(-345%) rotate(-45deg)'
        })),
        transition('default => animated', [
            animate(300, keyframes([
                style({
                    transform: 'translateY(-345%) ',
                    offset: 0.4
                }),
                style({
                    transform: 'translateY(-345%)',
                    offset: 0.8
                }),
                style({
                    transform: 'translateY(-345%) rotate(-45deg)',
                    offset: 1
                })
            ]))
        ]),
        transition('animated => default', [
            animate(300, keyframes([
                style({
                    transform: 'translateY(-345%) rotate(0)',
                    offset: 0.2
                }),
                style({
                    transform: 'translateY(-345%)',
                    offset: 0.6
                }),
                style({
                    transform: 'none',
                    offset: 1
                })
            ]))

        ])
    ])