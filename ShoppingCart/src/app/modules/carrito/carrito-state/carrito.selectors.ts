import { Producto } from '../../producto/services/Producto';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Carrito, Carrito_Prod } from '../services/carrito';

export const selectCountProducts = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Producto[]) => {
    return state.length;
  }
);

export const selectTotalPrice = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Producto[]) => {
    var precioTotal = 0;
    state.forEach((p) => (precioTotal += p.Price));
    return precioTotal;
  }
);

export const selectGroupedCartEntries = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Producto[]) => {
    var map: Map<number, Carrito_Prod> = new Map();

    state.forEach((p) => {
      if (map.get(p.id)) {
        (map.get(p.id) as Carrito_Prod).cantidad++;
      } else {
        map.set(p.id, { producto: p, cantidad: 1 });
      }
    });

    const sortedMap = new Map([...map.entries()].sort());
    return Array.from(sortedMap.values());
  }
);
