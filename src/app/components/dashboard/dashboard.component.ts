import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from 'src/app/interfaces/user';
import { CrudService } from 'src/app/services/crud.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  displayName = ""
  photo = ""
  usersData: UserData[]
  isDelete= false
  constructor(private activatedrouter: ActivatedRoute, private crudAPI: CrudService, private userService: UserService, private router: Router) { 
  }

  ngOnInit() {
    this.crudAPI.getPlaces().subscribe(users => {this.usersData = users})
    this.activatedrouter.queryParams.subscribe(params => {
      this.displayName = params['displayName'];
      this.photo = params['photo'];
      alert(this.photo)
    });
  }

  deleteUser() {
    this.isDelete = true
  }

  async confirmDelete(user: any, index: any){
    let rowUser = document.querySelector(`tr[data-user-id="${user.id}"]`);
    const reponse = await this.crudAPI.deletePlaces(user);
    console.log(reponse)
    if (rowUser) {
      rowUser.parentNode?.removeChild(rowUser);
    }
  }
  logout(){
    this.userService.logout().then(response => {
      this.router.navigate([''])
    })
    
  

  }
}