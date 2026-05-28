import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styles: [`
    :host {
      display: block;
      padding: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }

    th {
      background: #f4f4f4;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {

  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 15000,
      category: 'Electrónica'
    },
    {
      id: 2,
      name: 'Mouse',
      price: 300,
      category: 'Accesorios'
    },
    {
      id: 3,
      name: 'Teclado',
      price: 800,
      category: 'Accesorios'
    },
    {
      id: 4,
      name: 'Monitor',
      price: 4500,
      category: 'Electrónica'
    }
  ];

}