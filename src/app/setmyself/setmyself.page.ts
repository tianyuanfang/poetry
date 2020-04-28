import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import * as $ from 'jquery';

@Component({
  selector: 'app-setmyself',
  templateUrl: './setmyself.page.html',
  styleUrls: ['./setmyself.page.scss'],
})
export class SetmyselfPage implements OnInit {

  userId;
  data;
  constructor(public nav: NavController,public http:HttpClient) { }

  sex;
  ionViewWillEnter(){
    this.userId=localStorage.getItem("userId");
    this.http.post('/api/tabs/my',{"uid":this.userId}).subscribe(res=>{
      console.log(res)
      this.data=res[0];
      if(this.data.sex==null){
        this.sex='男';
      }else{
        this.sex=this.data.sex;
      }
    })
   
  }
  ngOnInit() {
  }
  back() {
    this.nav.back();
  }
  over(){
    console.log(this.sex);
  }
}
