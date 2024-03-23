import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginform:FormGroup
constructor(){
  this.loginform=new FormGroup({
    loginemail:new FormControl('',[Validators.required , Validators.minLength(5)] ),
    loginpassword:new FormControl('',[Validators.required , Validators.minLength(5)] )
  })
}
handleloginform(){
  console.log(this.loginform);
  
  
}
}
