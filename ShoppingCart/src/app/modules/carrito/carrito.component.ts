import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { concat, Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { COMPLETED, PENDING } from '../orden/orden-state/orden.action';
import { Orden } from '../orden/services/orden';
import {
  addProduct,
  clearCart,
  removeProduct,
} from './carrito-state/carrito.actions';
import { selectGroupedCartEntries } from './carrito-state/carrito.selectors';
import { Carrito, Carrito_Prod } from './services/carrito';
import { CarritoService } from './services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>();

  cartEntries$: Observable<Carrito_Prod[]>;
  rowData$: any[] = [];
  carritos: Carrito_Prod[];
  columnDefs = [
    { field: 'producto.id', headerName: 'Id' },
    { field: 'producto.Name', headerName: 'Nombre' },
    { field: 'producto.Price', headerName: 'Precio' },
    { field: 'cantidad', headerName: 'Cantidad' },
  ];

  cont = 0;

  constructor(
    public authService: AuthService,
    public store: Store,
    public carritoService: CarritoService
  ) {
    this.cartEntries$ = store.select(selectGroupedCartEntries);
  }

  ngOnInit(): void {
    this.cartEntries$.subscribe((data) => {
      this.rowData$ = data;
      let ordenItem: Orden = {
        id: this.cont++,
        estado: PENDING,
      };
    });

    console.log('COUNT', this.rowData$.length);
    console.log(this.rowData$);
  }

  borrarCarrito() {
    this.store.dispatch(clearCart());
  }

  agregarProducto(data: Carrito_Prod) {
    this.store.dispatch(addProduct(data.producto));
  }

  borrarProducto(data: Carrito_Prod) {
    this.store.dispatch(removeProduct(data.producto));
  }

  generarOrden() {
    var idCarrito = 0;
    if (idCarrito == null)
      this.cartEntries$.subscribe((data) => {
        console.log('CAR', data);
        this.carritos = data;
        this.carritoService.cargarProdCarrito(this.carritos);
        // let ordenItem: Orden = {
        //   id: this.cont++,
        //   estado: COMPLETED,
        // };
      });
  }
}
