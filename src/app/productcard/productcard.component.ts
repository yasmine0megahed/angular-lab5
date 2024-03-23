import { Component, EventEmitter, Input, Output } from '@angular/core';
import { productitem } from '../../../products-list';
import { DiscountPipe } from '../discount.pipe';
import { Router } from '@angular/router';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [DiscountPipe],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css',
})
export class ProductcardComponent {
  @Input() item!: productitem;
  @Output() sendIdToParent = new EventEmitter();
  @Output() sendItemToParent :EventEmitter<productitem> = new EventEmitter(); //new
  constructor(private router: Router, private counterService: CounterService) {}
  redirect(id: number) {
    this.router.navigate([`/productdetails/${id}`]);
    console.log(id);
  }

  counter = 0;
  ngOnInit() {
    this.counterService.getCounter().subscribe((result) => console.log(result));
    this.counterService
      .getCounter()
      .subscribe((count) => (this.counter = count));
  }

  /////////////////////////////////////////////////////////////////////////////
  // itemsArray: Array<productitem> = [];
  addToArray(item: productitem) {
   
this.sendItemToParent.emit(item)

  }
}
