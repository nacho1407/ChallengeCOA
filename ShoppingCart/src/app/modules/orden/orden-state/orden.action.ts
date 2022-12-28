import { Orden } from '../services/orden';
import { OrdenAction } from './ordenAction';

export const PENDING = 'PENDING';
export const COMPLETED = 'COMPLETED';

export function ordenReducer(state: Orden, action: OrdenAction) {
  switch (action.type) {
    case PENDING:
      state = action.payload;
      console.log("Order's state : " + state.estado);
      return state;

    case COMPLETED:
      state = action.payload;
      return state;

    default:
      return state;
  }
}
