import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import {MatTableModule} from '@angular/material/table';
import { GridComponent } from './grid/grid.component';
import {MatButtonModule} from '@angular/material/button';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'grid', component: GridComponent },
 // { path: 'ali', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    GridComponent
  ],
  imports: [
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatSliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    [RouterModule.forRoot(routes)],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
