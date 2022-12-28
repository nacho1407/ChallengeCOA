import { createAction, props } from '@ngrx/store';
import { Producto } from '../../producto/services/Producto';

export const addProduct = createAction('Agregar Producto', props<Producto>());
export const removeProduct = createAction('Agregar Carrito', props<Producto>());
export const clearCart = createAction('Borrar Carrito');
