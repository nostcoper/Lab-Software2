import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  displayName = ""
  constructor(private router: ActivatedRoute) { 
  }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.displayName = params['displayName'];
    });
  }
}