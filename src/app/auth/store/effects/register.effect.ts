import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';
import { AuthService } from '../../services/auth.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { ICurrentUser } from '../../../shared/types/curentUser.interface';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) =>
        this.authService.register(request).pipe(
          map((currentUser: ICurrentUser) =>
            registerSuccessAction({ currentUser })
          ),
          catchError(() => of(registerFailureAction()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
