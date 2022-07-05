import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GridService } from '../grid.service';
import { ConfigService } from '../services/config.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'family'];
  dataSource: any;
  namChkHecli:any;

  //dataSource = ELEMENT_DATA;
  constructor(private http: HttpClient,
    public gridService: GridService,
    public usersService: UsersService,
    public configService: ConfigService
  ) {

  }



  ngOnInit() {
    
    this.usersService.selectAllListOfclients().subscribe(
      (success)=>{
        debugger
        
        this.dataSource= new MatTableDataSource(success);
      }
    )
  
    // return this.http.get<any>("https://localhost:44312/api/HseECheckLists").subscribe(
    //   (success) => {
    //     console.log('success',success)
    //     this.dataSource= new MatTableDataSource(success);
    //   }
    // )
    //   ;
   // this.dataSource = null
  }

 reload(){
  this.usersService.selectAllListOfclients().subscribe(
    (success)=>{
      debugger
      
      this.dataSource= new MatTableDataSource(success);
    }
  )
 }

//  ngDoCheck(){
//   debugger
//   if(this.configService.flag==true){
//     this.usersService.selectAllListOfclients().subscribe(
//       (success)=>{
//         debugger
        
//         this.dataSource= new MatTableDataSource(success);
//       }
//     )
  
// }
// }


}
