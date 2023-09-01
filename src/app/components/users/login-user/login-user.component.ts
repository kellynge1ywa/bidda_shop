import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { userInterface } from 'src/app/interface/userInterface';


@Component({
  selector: 'login-user',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit{

  loginForm!:FormGroup

  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router){}

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      Email:['',Validators.email],
      Password:['']
    })
      
  }

  loginUser(){
    this.http.get<any>('http://localhost:3000/RegisteredUsers')
    .subscribe((res)=>{
      const user = res.find((user:any)=>{
        return user.Email==this.loginForm.value.Email && user.Password==this.loginForm.value.Password
      });
      if(user){
        alert('Login successful');
        this.loginForm.reset();
      this.router.navigate(['/products'])
      } else{
        alert('User not found!!')
        this.loginForm.reset();
      }
      
    })
  }

}
