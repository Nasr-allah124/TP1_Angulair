import { Component, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

export interface Registration {
  fullName: string;
  email: string;
  age: number | null;
  country: string;
}

export const countries = ['France', 'Belgique', 'Suisse', 'Canada'];
export const materialImports = [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule];

@Component({
  selector: 'app-registration-summary',
  template: `
    <h3>Récapitulatif de l’inscription</h3>
    <dl>
      <dt>Nom complet</dt><dd>{{ registration().fullName }}</dd>
      <dt>Email</dt><dd>{{ registration().email }}</dd>
      <dt>Âge</dt><dd>{{ registration().age }} ans</dd>
      <dt>Pays</dt><dd>{{ registration().country }}</dd>
    </dl>
  `,
})
export class RegistrationSummary {
  readonly registration = input.required<Registration>();
}
