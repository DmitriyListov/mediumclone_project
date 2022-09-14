import { createAction, props } from '@ngrx/store';
import { ActionType } from '../types/actionType';
import { IRegisterRequest } from '../../types/registerReques.interface';
import { ICurrentUser } from '../../../shared/types/curentUser.interface';
import { IBackendErrors } from '../../../shared/types/backendErrors.interface';

export const registerAction = createAction(
  ActionType.REGISTER,
  props<{ request: IRegisterRequest }>()
);

export const registerSuccessAction = createAction(
  ActionType.REGISTER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const registerFailureAction = createAction(
  ActionType.REGISTER_FAILURE,
  props<{ errors: IBackendErrors }>()
);
