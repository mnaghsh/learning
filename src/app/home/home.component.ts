import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  configUrl = 'https://am.usembassy.gov/visas/nonimmigrant-visas/non-immigrant-visa-application-numbers/';
  constructor(private myRoute: Router,
    public http: HttpClient,
    public configService: ConfigService
    //  private http: HttpClient
  ) {



    this.getConfig()


    //  this.myRoute.navigate(['users']);

  }
  getConfig() {
    debugger
    return this.http.get<any>(this.configUrl).subscribe(
      (success) => {
        const collection = success.getElementsByClassName("main");
        debugger
      }
    );
  }

  // showConfig() {
  //   this.configService.getConfig()
  //     .subscribe((data: Config) => this.config = {
  //         heroesUrl: data.heroesUrl,
  //         textfile:  data.textfile,
  //         date: data.date,
  //     });
  // }
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
