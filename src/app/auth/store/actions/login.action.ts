import { createAction, props } from '@ngrx/store';
import { ActionType } from '../types/action-type';
import { ILoginRequest } from '../../types/loginRequestInterface';
import { ICurrentUser } from '../../../shared/types/curentUser.interface';
import { IBackendErrors } from '../../../shared/types/backendErrors.interface';

export const loginAction = createAction(
  ActionType.LOGIN,
  props<{ request: ILoginRequest }>()
);

export const loginSuccessAction = createAction(
  ActionType.LOGIN_SUCCESS,
  props<{
    currentUser: ICurrentUser;
  }>()
);

export const loginFailureAction = createAction(
  ActionType.LOGIN_FAILURE,
  props<{
    errors: IBackendErrors;
  }>()
);
