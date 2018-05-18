import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
//import { Router, ActivatedRoute } from '@angular/router';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  obj;
  abcd;
  persons=[];
  
  constructor(private http:Http,private router :Router, private xyz:ActivatedRoute) { }

  ngOnInit() {
    
    this.xyz.params.subscribe(
      (res)=>
      {
        this.abcd = res;
      });

    this.obj = new info();
    this.getinfo(this.abcd.UniqueIDToAccessTheFullData);
  }
  
  getinfo(z){
    var tousethisagaininprogram = this;
    this.http.get("http://localhost:3000/reg/"+z)
    .map((givenresponse: Response)=> givenresponse.json())
    .subscribe(
      q=>
      {
        tousethisagaininprogram.obj=q;
        console.log(this.obj);
      })
  }


edit(j)
{
  var instedofthis =this;
  var b= JSON.parse(JSON.stringify(this.obj));
  //if(b.id){put()}else{post()}
  this.http.put("http://localhost:3000/reg/"+j,b)
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
