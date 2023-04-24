import { Component, OnInit, Type } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import {matchpassword} from 'src/app/utils/custom-validations'
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { state } from '@angular/animations';
import { timeout, timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  public passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?!.*\s).{8,}$/;
  incorrectLogin: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  LoginForm = new FormGroup({
    'email': new FormControl('', [Validators.required,  Validators.email]),
    'password': new FormControl('', [Validators.required]),
  });

  RegisterForm = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
    'passwordConfirm': new FormControl('', [Validators.required]),
  }, {validators: matchpassword});

  onSubmitRegister() {
    this.userService.register(this.RegisterForm.value)
      .then(Response=> {
        this.userService.verfication(Response)
        alert("Se ha enviado correo de confirmación")
      })
      .catch(error => {});
  }

  onSubmitLogin() {
    if (this.LoginForm?.valid){
      this.userService.login(this.LoginForm.value)
      .then(response => {
        this.routeToDashboard(response);
      })
      .catch(error => {console.log(error.code)
        this.openAlert()});
    }else{
      this.openAlert()
    }
   
  }

  onSubmitGoogle(){
    this.userService.loginWithGoogle()
      .then(response => {
        this.routeToDashboard(response);
      })
      .catch(error => console.log(error));
  }
  
  onSubmitFacebook(){
    this.userService.loginWithFacebok()
      .then(response => {
        this.routeToDashboard(response);
      })
      .catch(error => console.log(error));
  }

  onSubmitTwitter(){
    this.userService.loginWithTwitter()
      .then(response => {
        this.routeToDashboard(response);
      })
      .catch(error => console.log(error));
  }

  onSubmitGitHub(){
    this.userService.loginWithGitHub()
      .then(response => {
        this.routeToDashboard(response);
      })

      .catch(error => console.log(error));
  }

  routeToDashboard(response: any){
    this.router.navigate(['/dashboard'],{ queryParams: { displayName: response.user.displayName } });
  }

  openAlert(){
    this.incorrectLogin = true
    const contador = timer(3000);
    contador.subscribe(()=>{this.incorrectLogin = false})
  }
  closeAlert(){
    this.incorrectLogin = false
  }
  
  ngOnInit() {
    const btnSwitch = document.querySelectorAll('.switch');
    const registerForm = document.querySelector('.register-form');
    if (registerForm) {
      for (let i = 0; i < btnSwitch.length; i++) {
        btnSwitch[i].addEventListener('click', () => {
          this.closeAlert()
          registerForm.classList.toggle('toggle');
        });
      }
    }
  }

}