import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { productitem } from '../../../products-list';
import productsJason from '../../assets/products-list.json';
import { parse } from 'path';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  items: Array<productitem> = productsJason;
  itemCount: number = 1;

  increaseCounteritem() {
    console.log(this.itemCount); 
    this.itemCount = this.itemCount + 1; 
  }
  decreaseCounteritem(){
    console.log(this.itemCount); 
    this.itemCount = this.itemCount - 1; 
  }
  constructor(private counterService: CounterService) {}
  counter = 0;
  ngOnInit() {
    this.counterService.getCounter().subscribe((result) => console.log(result));
    this.counterService
      .getCounter()
      .subscribe((count) => (this.counter = count));
  }
  decreaseCounter() {
    this.counterService.setCounter(this.counter - 1);
  }
  increaseCounter() {
    this.counterService.setCounter(this.counter + 1);
  }

  cardArray: Array<productitem> = [];
  show() {
    const storedDataString = localStorage.getItem('card');
  console.log(storedDataString)
    if (storedDataString) {
      this.cardArray = JSON.parse(storedDataString);
      console.log("this is ", this.cardArray);
    } else {
      console.log("Local storage does not contain 'card'");
    }
  }
}
