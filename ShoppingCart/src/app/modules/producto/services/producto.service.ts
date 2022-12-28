import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private firestore: AngularFirestore) {}

  getProductos() {
    return this.firestore.collection<Producto>('Products').valueChanges();
  }
}
