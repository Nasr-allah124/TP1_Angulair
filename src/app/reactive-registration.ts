import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { countries, materialImports, Registration, RegistrationSummary } from './registration';

@Component({
  selector: 'app-reactive-registration',
  imports: [ReactiveFormsModule, ...materialImports, RegistrationSummary],
  templateUrl: './reactive-registration.html',
})
export class ReactiveRegistration {
  readonly countries = countries;
  readonly form = new FormGroup({
    fullName: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    age: new FormControl<number | null>(null, [Validators.required, Validators.min(18)]),
    country: new FormControl('', { nonNullable: true, validators: Validators.required }),
  });

  readonly touchedMatcher: ErrorStateMatcher = {
    isErrorState: (control) => !!(control?.invalid && control.touched),
  };
  submitted: Registration | null = null;

  submit(): void {
    if (this.form.valid) {
      this.submitted = this.form.getRawValue();
    }
  }
}
