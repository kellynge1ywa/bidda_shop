import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';

import {  Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { userInterface } from 'src/app/interface/userInterface';
import { UserServices } from 'src/app/services/userServices';

@Component({
  selector: 'register-user',
  standalone: true,
  imports: [CommonModule, RouterModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit{

  registerForm!:FormGroup

  constructor( private userService:UserServices   ,private router:Router, private fb:FormBuilder,private http:HttpClient){}

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      id:[this.generateId()],
      Fullname:['',Validators.required],
      Email:['',Validators.required],
      Username:[''],
      Password:['']
    })
      
  }

  generateId():string{
    return `${new Date().getTime()}-${Math.random()}`;
  }

  registerUser(){
    this.userService.AddNewUser(this.registerForm.value as userInterface)
    console.log(this.registerForm.value)
    this.registerForm.reset();
    // this.http.post<userInterface>('http://localhost:3000/RegisteredUsers',this.registerForm.value)
    // .subscribe(res=>{
    //   alert('Registration succesful');
    //   this.registerForm.reset();
    //   this.router.navigate(['users/login'])

    // })
  }

}
