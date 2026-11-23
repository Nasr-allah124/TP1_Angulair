import { Component } from '@angular/core';
import { TemplateRegistration } from './template-registration';
import { ReactiveRegistration } from './reactive-registration';

@Component({
  selector: 'app-root',
  imports: [TemplateRegistration, ReactiveRegistration],
  template: `<main><h1>TP 1 · Formulaires Angular</h1><div class="exercises">
    <app-template-registration /><app-reactive-registration />
  </div></main>`,
})
export class App {}
