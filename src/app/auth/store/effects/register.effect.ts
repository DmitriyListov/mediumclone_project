import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';
import { AuthService } from '../../services/auth.service';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import { ICurrentUser } from '../../../shared/types/curentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistenceService } from '../../../shared/service/persistence.service';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';

@Injectable()
export class RegisterEffect {
  register$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) =>
        this.authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.persistenceService.set('accessToken', currentUser.token);
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(registerFailureAction({ errors: errorResponse.error.errors }))
          )
        )
      )
    )
  );
  redirectAfterSubmitting$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    /*if used tap() method and don't return any action - use config option {dispatch:false}*/
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}
}
