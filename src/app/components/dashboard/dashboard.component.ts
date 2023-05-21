import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from 'src/app/interfaces/user';
import { CrudService } from 'src/app/services/crud.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  displayName = ""
  photo = ""
  usersData: any
  isCreate: boolean = true
  constructor(private activatedrouter: ActivatedRoute, private crudAPI: CrudService, private userService: UserService, private router: Router) { 
  }

  createForm = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required,  Validators.email]),
  });
  
  ngOnInit() {
    this.crudAPI.getPlaces().subscribe(users => {
      this.usersData = users.map(user => ({
        ...user,
        isDelete: false,
        isEdit: false
      }));
    });
    this.activatedrouter.queryParams.subscribe(params => {
      this.displayName = params['displayName'];
      this.photo = params['photo'];
    });
  }



  delete(user: any){
    user.isDelete = true
  }

  edit(user: any){
    user.isEdit = true
  }

  async confirmDelete(user: any){
     // const reponse = await this.crudAPI.deletePlaces(user);
      //console.log(reponse)
      console.log(this.userService.deleteUser(user.id))
  }
  
  cancelDelete(user: any){
    user.isDelete = false
  }
  
  async confirmEdit(user: any){
    user.isEdit = false
    const reponse = await this.crudAPI.updatePlace(user.id  ,user.name, user.email);
    console.log(reponse)
}

  cancelEdit(user: any){
    user.isEdit = false
  }

  logout(){
    this.userService.logout().then(response => {
      this.router.navigate([''])
    })
  }

}