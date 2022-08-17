import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../../../shared/interface/appState.interfase';
import { IAuthState } from '../../interface/authRegister.interface';

export const authFeatureSelector = createFeatureSelector<IAppState, IAuthState>(
  'auth'
);

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmitting
);
