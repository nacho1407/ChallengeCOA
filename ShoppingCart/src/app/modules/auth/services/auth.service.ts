import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  constructor(public afAuth: AngularFireAuth) {}

  async login(email: string, password: string) {
    await this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }
  async register(email: string, password: string) {
    await this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }
  logout() {
    this.afAuth.signOut();
    localStorage.removeItem('user');
  }
}
