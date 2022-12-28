import { Producto } from '../../producto/services/Producto';

export interface Carrito_Prod {
  producto: Producto;
  cantidad: number;
}

export interface Carrito {
  idCarrito: number;
  estado: string;
}
