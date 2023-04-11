import { ICurrentUser } from '../../shared/types/curentUser.interface';
import { IBackendErrors } from '../../shared/types/backendErrors.interface';

export interface IAuthState {
  isSubmitting: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: IBackendErrors | null;
  isLoading: boolean;
}
