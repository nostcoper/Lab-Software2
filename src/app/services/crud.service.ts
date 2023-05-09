import { Injectable } from '@angular/core';
import { Firestore, collectionData, doc, deleteDoc} from '@angular/fire/firestore'
import { UserData } from '../interfaces/user';
import { addDoc, collection, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})


export class CrudService {

  constructor(private firestore: Firestore, private userService: UserService) { }
  addPlace({name, email}: any){
    const userRef = collection(this.firestore, 'Users');
    const data: UserData = {
      name: name,
      email: email,
    }
    return addDoc(userRef, data);
  }

  getPlaces(): Observable<UserData[]>{
    const userRef = collection(this.firestore, 'Users');
    return collectionData(userRef, {idField: 'id'}) as Observable<UserData[]>
}
  deletePlaces(user: UserData){
    const userRef = doc(this.firestore, `Users/${user.id}`);
    return deleteDoc(userRef)
  }

  updatePlace(id:string, name:string, email:string) {
    const userRef = doc(this.firestore, 'Users', id); 
    const data = {
      name: name,
      email: email,
    };
     return updateDoc(userRef, data);
  }
}
