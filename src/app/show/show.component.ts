import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private http:Http,private router:Router) {
    
   }

  ngOnInit() {
    this.getinfo();
    
  }
  persons=[];
  
  getinfo(){
    var tousethisagaininprogram = this;
    this.http.get("http://localhost:3000/reg")
    .map((givenresponse: Response)=> givenresponse.json())
    .subscribe(
      q=>
      {
        tousethisagaininprogram.persons=q;
      })

  }
//edit(a)
//{
  //get that i from 
//}


delete(y){
  var self = this;
  this.http.delete("http://localhost:3000/reg/"+y).subscribe(function(d){
    console.log("data",d)
    self.getinfo();
  })
 
}

}
