import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-product',
  imports: [],
  templateUrl: './newProduct.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewProduct {
  producto = {
    nombre: '',
    precio: 0,
    cantidad: 0,
    descripcion: ''
  };

  agregarProducto() {
    console.log('Producto agregado:', this.producto);

    // Limpiar formulario
    this.producto = {
      nombre: '',
      precio: 0,
      cantidad: 0,
      descripcion: ''
    };
  }
}
