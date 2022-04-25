import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    //redirection after 5s
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 5000);
  }

}
