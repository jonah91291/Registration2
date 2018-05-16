import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';

import {HttpModule} from "@angular/http";
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule} from '@angular/router';
import { Edit1Component } from './edit1/edit1.component';


const routes: Routes =[
  {
    path:"",
    redirectTo:'',
    pathMatch:'full'
    
  },
  // {
  //   path:"employees",
  //   component:DisplayEmployeesComponent
    
  // },
  {
  path:'add',
  component:AddComponent
},
{
  path:'show',
  component:ShowComponent
}
]


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ShowComponent,
    Edit1Component,
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
