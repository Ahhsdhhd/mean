import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private auth:AuthService
    ) {

    this.loginForm = this.fb.group({
'username': ['',Validators.required],
'password': ['',Validators.required]

    })
  }

  ngOnInit(): void {
  }
  get loginFormControl() { return this.loginForm.controls }

  login(){
    const data = this.loginForm.value;
  this.auth.sigin(data)
  .subscribe(
  (res:any)=>{

    alert("login succ")
  }


  )
  }

}
