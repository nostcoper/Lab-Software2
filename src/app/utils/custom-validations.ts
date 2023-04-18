import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


  export const matchpassword : ValidatorFn = (control: AbstractControl):ValidationErrors|null =>{

     let password = control.get('password');
     let confirmpassword = control.get('passwordConfirm');
     if(confirmpassword && password?.value != confirmpassword?.value){
        return {
            matchError : true }
     }
    return null; 
   }