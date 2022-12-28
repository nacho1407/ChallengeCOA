import { createReducer, on } from '@ngrx/store';
import { Producto } from '../../producto/services/Producto';
import { addProduct, clearCart, removeProduct } from './carrito.actions';

export const carritoInicial: Producto[] = [];

export const cartReducer = createReducer(
  carritoInicial,
  on(clearCart, (_) => []),

  on(addProduct, (entries, producto) => {
    const entriesClone: Producto[] = JSON.parse(JSON.stringify(entries));
    entriesClone.push(producto);
    return entriesClone;
  }),

  on(removeProduct, (entries, producto) => {
    const entriesClone: Producto[] = JSON.parse(JSON.stringify(entries));
    const found = entriesClone.find((e) => e.id == producto.id);
    if (found) {
      entriesClone.splice(entriesClone.indexOf(found), 1);
    }
    return entriesClone;
  })
);
