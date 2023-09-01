import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { userInterface } from "../interface/userInterface";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})

export class UserServices{
    constructor(private http:HttpClient, private router:Router) {}


    AddNewUser(payload:userInterface){
        this.http.post<userInterface>('http://localhost:3000/RegisteredUsers',payload)
        .subscribe(res=>{
            alert('Registration successful!!');
            
            // this.router.navigate(['users/login'])
        })
    }

    userLogin(){
        // this.http.get<userInterface>('http://localhost:3000/RegisteredUsers').subscribe((res)=>{
        //     const user=res.find((user:any)=>{

        //     })
        // })

    }




}