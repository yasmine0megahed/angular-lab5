import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(private counterService:CounterService){}
counter=0;
ngOnInit(){
  this.counterService.getCounter().subscribe((result)=>console.log(result))
  this.counterService.getCounter().subscribe((count)=>this.counter=count)
}
}
