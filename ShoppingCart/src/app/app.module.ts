import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { authRoutingModule } from './modules/auth/auth-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './modules/home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './modules/auth/login/login.component';
import { AuthService } from './modules/auth/services/auth.service';
import { CarritoComponent } from './modules/carrito/carrito.component';
import { ProductoComponent } from './modules/producto/producto.component';
import { OrdenComponent } from './modules/orden/orden.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { cartReducer } from './modules/carrito/carrito-state/carrito.reducer';
import { AgGridModule } from 'ag-grid-angular-legacy';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CarritoComponent,
    ProductoComponent,
    OrdenComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    authRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    AngularFirestoreModule,
    AgGridModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormlyModule.forRoot(),
    StoreModule.forRoot({ cartEntries: cartReducer }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
