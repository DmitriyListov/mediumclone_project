import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { ICurrentUser } from '../../../../types/curentUser.interface';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from '../../../../../auth/store/selectors';

@Component({
  selector: 'mc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  public isLoggedIn$: Observable<boolean>;

  public isAnonymous$: Observable<boolean>;

  public currentUser$: Observable<ICurrentUser>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));

    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));

    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
