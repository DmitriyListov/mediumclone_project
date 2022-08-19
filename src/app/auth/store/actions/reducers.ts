import { IAuthState } from '../../types/authState.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { registerAction } from './register.action';
const initialState: IAuthState = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export function reducers(state: IAuthState, action: Action) {
  return authReducer(state, action);
}
