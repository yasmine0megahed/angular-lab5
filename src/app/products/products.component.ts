import { Component, Input } from '@angular/core';
import { productitem } from '../../../products-list';
import productsJason from '../../assets/products-list.json';
import { ProductcardComponent } from '../productcard/productcard.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductcardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  items: Array<productitem> = productsJason;
  cardArray: Array<productitem> = [];
  // @Input() items!:productitem[]
  reciveIdToParent(id: number) {}
  reciveItemToParent(item: productitem) {
    this.cardArray.push(item);
    console.log(this.cardArray);
    localStorage.setItem('card',JSON.stringify(this.cardArray))
  }
}
