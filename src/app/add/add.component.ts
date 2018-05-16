import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
//import {Router, ActivatedRoute, Params} from '@angular/router';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
obj;
id;
  constructor(private http:Http,private router :Router) {
 
   }

  ngOnInit() {
    this.obj = new info();
    
  
  }

add()
{
  var instedofthis =this;
  var b= JSON.parse(JSON.stringify(this.obj));
  //if(b.id){put()}else{post()}
  this.http.post("http://localhost:3000/reg",b)
  .subscribe(function(d)
  {
    console.log("data",d)
  instedofthis.router.navigate(['/show'])
  })
}

}



class info{
  public EID:string;
  public ENAME:any;
}
