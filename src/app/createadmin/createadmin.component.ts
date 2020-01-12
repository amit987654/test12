import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.scss']
})
export class CreateadminComponent implements OnInit {


  constructor() { }
  signup=new FormGroup({
    firstname:new FormControl(null,[Validators.required]) ,
    lastname:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
    confirmpassword:new FormControl(null,[Validators.required,this.matchpassword]),
    googlelink:new FormControl(),
    twitterlink:new FormControl()

  })


matchpassword(c:AbstractControl):{[key:string]:boolean}|null{
  let passwords=c.get('password').value;
  let confirmpassword=c.get('confirmpassword').value;
  if(passwords!=confirmpassword){
    c.get('confirmpassword').setErrors({confirmpassword:true})
  }
else{
  return null;
}
  
}

  get form(){
   return  this.signup.controls;
  }
  onsign(){
    console.log(this.signup)
  }
  ngOnInit() {
  }


}
