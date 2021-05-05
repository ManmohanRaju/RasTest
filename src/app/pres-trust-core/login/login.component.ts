import { SessionStorageService } from './../services/session-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  submitted:boolean  =  false;

  constructor(
    private router: Router,
    private fb:FormBuilder,
    private sessionService:SessionStorageService
    ) { }

get userName(){
return this.loginForm.get('userName');
}
get password(){
  return this.loginForm.get('password');
  }
  ngOnInit() {
    this.buildLoginForm();
  }

   
  
   //Build login form 
  buildLoginForm(){
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password:[null, [Validators.required]]
    })
  }

   public errorHandling = (control: string, error: string) => {
   return this.loginForm.controls[control].hasError(error);
 }

    loginUser() {
      this.submitted = true;
    if(this.loginForm.invalid){
return;
    }
    this.sessionService.setUser(this.userName.value);
      // sessionStorage.setItem("userName",this.userName.value);
      this.router.navigate(['/dashboard']);
    }
  ngOnDestroy(): void {
  }

  

}
