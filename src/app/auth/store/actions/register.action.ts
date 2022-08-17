import { createAction, props } from '@ngrx/store';
import { ActionType } from '../types/actionType';
import { IRegisterRequest } from '../../interface/registerReques.interface';

export const registerAction = createAction(
  ActionType.REGISTER,
  props<IRegisterRequest>()
);
