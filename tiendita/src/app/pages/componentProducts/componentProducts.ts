import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-component-products',
  imports: [],
  templateUrl: './componentProducts.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentProducts {}
