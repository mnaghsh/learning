
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  form;
  idForDelete: any;
  myControl = new FormControl();
  message: string;
  // @ViewChild('name') name: any;
  //@ViewChild('family') family: any;
  constructor(private fb: FormBuilder,
    private usersService: UsersService,
    private configService: ConfigService,
    private myRoute: Router) {
      this.message=""

    this.form = fb.group({
      name: ['', Validators.required],
      family: ['', Validators.required],
      id: ['']
    });
  }

  ngOnInit() {
  }

  public insertAndUpdate() {
    debugger
    if (this.form.valid) {

      if (this.form.value.id) {
        let bodyForUpdate = {
          "id": this.form.value.id,
          "name": this.form.value.name,
          "family": this.form.value.family
        }
        this.usersService.updateListOfclients(this.form.value.id, bodyForUpdate).subscribe(
          (success) => {

          },
          (error) => {
            console.log('err', error)
          }
        )

      }

      else {
        let body = {

          "name": this.form.value.name,
          "family": this.form.value.family
        }
        this.usersService.insertAllListOfclients(body).subscribe(
          (success) => {
            debugger
          }
        )
      }
    }
  }
  public deleteRow() {
    debugger
    this.idForDelete
    this.usersService.deleteClients(this.idForDelete).subscribe(
      (sucess) => {
        this.message = "موفق"
        this.configService.flag=true
      },
      (error) => {

      }
    )
  }

}
