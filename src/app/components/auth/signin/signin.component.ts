import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  registerForm:FormGroup=new FormGroup({
    username:new FormControl(null,Validators.required),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,Validators.required),
    cpass:new FormControl(null,Validators.required)
  })

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit(): void {
  }
  movetoLogin(){
    this.router.navigate(['/login']);
  }
  register(){
    if(!this.registerForm.valid||(this.registerForm.controls.password.value!=this.registerForm.controls.cpass.value)){
      console.log('Invalid Form'); return;
    }
    this.userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=>{console.log(data);this.router.navigate(['/login']);},
      error=>console.error(error)
    )
  }
}
