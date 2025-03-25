import { Component } from '@angular/core';

@Component({
  selector: 'cas-about',
  imports: [],
  template: `
    <h2>About</h2>
    <p>Esta aplicación es una demo del uso de Angular</p>
    <p>A continuación, un ejemplo de componente contador</p>
    <cas-counter></cas-counter>
  `,
  styles: ``
})
export default class AboutComponent {

}
