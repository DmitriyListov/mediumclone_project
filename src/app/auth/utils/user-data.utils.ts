import { IAuthResponse } from '../types/authResponse.interface';
import { ICurrentUser } from '../../shared/types/curentUser.interface';

export const getUser = (response: IAuthResponse): ICurrentUser => response.user;
