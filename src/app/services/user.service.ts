import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider} from '@angular/fire/auth';
import { sendEmailVerification } from 'firebase/auth';
import { UserCredential } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
  
})

export class UserService {
  public isLogged = false;

  constructor(private auth: Auth) {
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

  isLoggedIn() {
    return this.isLogged
}
}
