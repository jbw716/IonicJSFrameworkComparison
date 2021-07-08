import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss'],
})
export class PizzaCardComponent implements OnInit {

  public pizzaCount = 0;

  constructor() { }

  ngOnInit() {}

  increment = () => this.pizzaCount++;

}
