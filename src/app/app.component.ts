import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  flg=false
  constructor(private myRoute: Router) {
    
    // this.myRoute.navigate(['home']);
  }
  toggleFunc() {
    this.flg = !this.flg
  }

}

