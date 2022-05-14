import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup= new FormGroup({
    email : new FormControl('', [Validators.required]),
    password : new FormControl('',[Validators.required])
  })

  submit(){
    // console.log(this.loginForm.value);
  }


  togglePassword(el:HTMLElement){
    let passwordInput = document.getElementsByTagName("input")[1];
    if(passwordInput.type === "password"){
      passwordInput.type = "text";
      el.className = 'fa fa-eye';
    }else{
      passwordInput.type = "password";
      el.className = 'fa fa-eye-slash';
    }
  }

  allUsers = [];
  constructor(private http:HttpClient , private router:Router) { }
  getUsers(){
    return this.http.get<any>('http://localhost:3000/users').subscribe((a)=>{
      this.allUsers = a;
      for(let i=0 ;i<a.length;i++){
        if(
          a[i].email === this.loginForm.get('email')?.value &&
          a[i].password === this.loginForm.get('password')?.value ){
          console.log(a[i].email);
          this.router.navigateByUrl('categories');
          localStorage.setItem('isAuth','true');
        }
      }
    });
  }

  ngOnInit(): void {

  }

}
