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
  constructor(private activatedrouter: ActivatedRoute, private crudAPI: CrudService, private userService: UserService, private router: Router) { 
  }

  ngOnInit() {
    this.crudAPI.getPlaces().subscribe(users => {this.usersData = users})
    this.activatedrouter.queryParams.subscribe(params => {
      this.displayName = params['displayName'];
      this.photo = params['photo'];
    });
  }

  logout(){
    this.userService.logout().then(response => {
      this.router.navigate([''])
    })
    
  }
}