import { Component, Input } from '@angular/core';
import { productitem } from '../../../products-list';
import productsJason from '../../assets/products-list.json'
// import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  allproducts :Array <productitem> =productsJason
  details?: productitem;

  // redirect(id:number){
  //   this.router.navigate([`/productdetails/${id}`])
  //   console.log(id)
  // }
  //  constructor(private activatedRoute :ActivatedRoute){}
@Input() id?:number;

ngOnInit(){
  // console.log(this.activatedRoute.snapshot.params['id'])
  // const idparams=this.activatedRoute.snapshot.params['id']
  // console.log(this.allproducts)
  // this.details=this.allproducts.find((card: productitem ) => card.id==idparams)
  this.details=this.allproducts.find((card: productitem ) => card.id==this.id)
}
}
