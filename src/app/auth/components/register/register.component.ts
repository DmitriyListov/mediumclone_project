import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { registerAction } from '../../store/actions/register.action';
import { Observable } from 'rxjs';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/actions/selectors';
import { IRegisterRequest } from '../../types/registerReques.interface';
import { IBackendErrors } from '../../../shared/types/backendErrors.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  public isSubmitting$: Observable<boolean>;

  public backendErrors$: Observable<IBackendErrors | null>;

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  public initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  public initializeForm(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  public onSubmit(): void {
    console.log('this.registerForm.value', this.registerForm.value)
    const request: IRegisterRequest = {
      user: this.registerForm.value,
    };
    this.store.dispatch(registerAction({ request }));
  }
}
