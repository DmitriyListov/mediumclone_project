import { createAction, props } from '@ngrx/store';
import { ActionType } from '../types/action-type';
import { ICurrentUser } from '../../../shared/types/curentUser.interface';

export const getCurrentUserAction = createAction(ActionType.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  ActionType.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const getCurrentUserFailureAction = createAction(
  ActionType.GET_CURRENT_USER_FAILURE
);
