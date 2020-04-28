import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-poemdetail',
  templateUrl: './poemdetail.page.html',
  styleUrls: ['./poemdetail.page.scss'],
})
export class PoemdetailPage implements OnInit {

  Q;
  A;
  MyA;
  result1;
  result2;
  result3;
  constructor(public nav:NavController,public http:HttpClient) {
    this.Q=localStorage.getItem("Q");
    this.Q=this.Q.substr(1);
    this.Q=this.Q.split(",");

    this.A=localStorage.getItem("A");
    this.A=this.A.substr(1);
    this.A=this.A.split(",");

    this.MyA=localStorage.getItem("MyA");
    this.MyA=this.MyA.substr(1);
    this.MyA=this.MyA.split(",");
    console.log(this.Q);
    console.log(this.A);
    console.log(this.MyA);
    this.http.post('/api/tabs/answertail',{"Qid":this.Q}).subscribe(res=>{
        console.log(res);
        this.result1=res['one'];
        this.result2=res['two'];
        this.result3=res['three'];
    })
   }

  ngOnInit() {
  }

  back() {
    this.nav.back();
  }
}
