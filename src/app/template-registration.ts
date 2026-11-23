import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { countries, materialImports, Registration, RegistrationSummary } from './registration';

@Component({
  selector: 'app-template-registration',
  imports: [FormsModule, ...materialImports, RegistrationSummary],
  templateUrl: './template-registration.html',
})
export class TemplateRegistration {
  readonly countries = countries;
  readonly registration: Registration = { fullName: '', email: '', age: null, country: '' };
  submitted: Registration | null = null;

  submit(form: NgForm): void {
    if (form.valid) {
      this.submitted = { ...this.registration };
    }
  }
}
