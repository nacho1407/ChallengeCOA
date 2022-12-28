import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectCountProducts,
  selectTotalPrice,
} from 'src/app/modules/carrito/carrito-state/carrito.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  productoCont$: Observable<number>;
  precioTotal$: Observable<number>;

  constructor(private store: Store) {
    this.productoCont$ = store.select(selectCountProducts);
    this.precioTotal$ = store.select(selectTotalPrice);
  }

  ngOnInit(): void {}
}
