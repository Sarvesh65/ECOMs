import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,Validators.required)
  });

  constructor(private router:Router, private user:UserService) { }

  ngOnInit(): void {

  }
movetoRegister(){
  this.router.navigate(['/register']);
}

login(){
  if(!this.loginForm.valid){
    console.log('Invalid'); return;
  }
  this.user.login(JSON.stringify(this.loginForm.value))
  .subscribe(
    data=>{console.log(data);this.router.navigate(['/home']);},
    error=>console.error(error)
  )
  //console.log(JSON.stringify(this.loginForm.value));
}

}
