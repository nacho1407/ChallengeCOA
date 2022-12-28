import { Action } from '@ngrx/store';
import { Orden } from '../services/orden';

export class OrdenAction implements Action {
  constructor(public type: string, public payload: Orden) {}
}
