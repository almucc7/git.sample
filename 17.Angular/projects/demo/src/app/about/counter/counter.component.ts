import { Component } from '@angular/core';

@Component({
  selector: 'cas-counter',
  imports: [],
  template: `
    <h3>Counter</h3>
    <div>
      <button (click)="changeCount(+1)">➕</button>
      <p [class]="count < 0 ? 'negative' : ''">{{ count }}</p>
      <button (click)="changeCount(-1)">➖</button>
    </div>

  `,
  styles: `
  :host {
      display: block;
      text-align: center;
      padding:10px;
      border:1px solid grey;
    }

    div{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p{
      margin: 0;
      font-size: 1.5rem;
      width: 50px;

    }

    `
})
export class CounterComponent {
  count = 0;

  changeCount(value: number){
    this.count += value;
  }
}
