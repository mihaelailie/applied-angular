import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
        <a class="btn"> Button</a>
    `,
    styles: ``
})
export class NavbarEndComponent {

}