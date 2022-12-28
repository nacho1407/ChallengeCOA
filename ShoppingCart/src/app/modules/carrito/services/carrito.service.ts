import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Carrito, Carrito_Prod } from './carrito';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  constructor(private firestore: AngularFirestore) {}

  cargarProdCarrito(carritos: Carrito_Prod[]) {
    return this.firestore
      .collection('Product_carts')
      .add(carritos)
      .then((response) => {
        console.log(response);
      });
  }

  crearCarrito(carrito: Carrito) {
    var lista = this.firestore.collection('Carts', (ref) =>
      ref.orderBy('idCart', 'desc').limitToLast(1)
    );
    this.firestore
      .collection('carts')
      .add(carrito)
      .then((response) => {
        console.log(response);
      });
  }
}
