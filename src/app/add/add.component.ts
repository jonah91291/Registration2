import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

import {Router, ActivatedRoute, Params} from '@angular/router';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
obj;
id;
abcd;
persons=[];
  constructor(private http:Http,private router :Router, private xyz:ActivatedRoute) {
 
   }

  ngOnInit() {
    this.obj = new info();
    
    this.xyz.params.subscribe(
      (res)=>
      {
        this.abcd = res;
      });
console.log('aaaaaaaaaaaaaa',this.abcd)
if(this.abcd.UniqueIDToAccessTheFullData)
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

add()
{
    var instedofthis =this;
    var b= JSON.parse(JSON.stringify(this.obj));
    console.log('object::::::',b);
    if(b.id){
      this.http.put("http://localhost:3000/reg/"+b.id,b)
      .subscribe(function(d)
      {
        console.log("data",d)
      instedofthis.router.navigate(['/show'])
      })
    }else{
      this.http.post("http://localhost:3000/reg",b)
      .subscribe(function(d)
      {
        console.log("data",d)
      instedofthis.router.navigate(['/show'])
      })
    }
}

}




class info{
  public EID:string;
  public ENAME:any;
  public id:any;
}
