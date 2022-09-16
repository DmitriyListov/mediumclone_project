import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMasseges/backendErrorMessages.module';
import { RegisterComponent } from './components/register/register.component';
import { PersistenceService } from '../shared/service/persistence.service';
import { RegisterEffect } from './store/effects/register.effect';
import { LoginEffect } from './store/effects/login.effect';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackendErrorMessagesModule,
  ],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
