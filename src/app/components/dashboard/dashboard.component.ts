import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  displayName = ""
  photo = ""
  constructor(private router: ActivatedRoute, private crudAPI: CrudService) { 
  }

  ngOnInit() {
    this.crudAPI.getPlaces().subscribe(users => {console.log(users)})
    this.router.queryParams.subscribe(params => {
      this.displayName = params['displayName'];
      this.photo = params['photo'];
    });
  }
}