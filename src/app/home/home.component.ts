import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

 
  constructor(private myRoute: Router
  //  private http: HttpClient
    ) { 
    //  this.myRoute.navigate(['users']);

  }
  // public mhd(){
  //   return this.http.get<any[]>("http://services.msc.ir/Oa_Rest/api/environment?date=2020-12-13")
  //   .subscribe((success)=>{
  //     console.log('sucess',success)
  //   });
  // }

  ngOnInit(): void {
   // this.mhd();
  }

}
