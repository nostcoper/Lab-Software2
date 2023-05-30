import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider, getAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import { UserCredential } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
  
})

export class UserService {
  public isLogged = false;

  constructor(private auth: Auth, private router: Router) {
   }
  
  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  
  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider)
  }

  loginWithFacebok(){
    return signInWithPopup(this.auth, new FacebookAuthProvider)
  }
  
  loginWithTwitter(){
    return signInWithPopup(this.auth, new TwitterAuthProvider)
  }

  loginWithGitHub(){
    return signInWithPopup(this.auth, new GithubAuthProvider)
  }

  verfication(UserCredential: UserCredential){
    return sendEmailVerification(UserCredential.user);
  }
  updatePassword(email: any){
    return sendPasswordResetEmail(this.auth, email)
  }

  isLoggedIn() {
    return this.isLogged;
  }

  logout(){
   return this.auth.signOut();
  }
  
  deleteUser(uid: string) {
    return getAuth()
  }
}
