import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProduct } from '../carrito/carrito-state/carrito.actions';
import { CarritoService } from '../carrito/services/carrito.service';
import { Producto } from './services/Producto';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  constructor(
    private productoService: ProductoService,
    private carritoService: CarritoService,
    private store: Store
  ) {}
  productos: Producto[];
  carrito: any;

  ngOnInit(): void {
    this.productoService.getProductos().subscribe((data) => {
      this.productos = data;
      console.log(data);
    });
  }

  AgregarCarrito(productos: Producto) {
    this.store.dispatch(addProduct(productos));
    console.log('Agregar Carrito', productos.Name);
  }
}
