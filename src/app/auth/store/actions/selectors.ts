import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../../../shared/types/appState.interfase';
import { IAuthState } from '../../types/authState.interface';

export const authFeatureSelector = createFeatureSelector<IAppState, IAuthState>(
  'auth'
);

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.validationErrors
);
