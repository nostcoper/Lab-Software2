import { Injectable } from '@angular/core';
import { Firestore} from '@angular/fire/firestore'
import { UserData } from '../interfaces/user';
import { addDoc, collection } from 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})


export class CrudService {

  constructor(private firestore: Firestore) { }
  addPlace({name, email}: any){
    const userRef = collection(this.firestore, 'Users');
    const data: UserData = {
      name: name,
      email: email,
    }
    return addDoc(userRef, data);
  }
}
