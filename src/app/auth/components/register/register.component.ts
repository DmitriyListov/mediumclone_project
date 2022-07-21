import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.registerForm = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  public onSubmit(): void {
    console.log(this.registerForm.valid);
  }
}
