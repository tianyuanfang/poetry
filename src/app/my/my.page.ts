import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-my',
  templateUrl: './my.page.html',
  styleUrls: ['./my.page.scss'],
})
export class MyPage {

  constructor(public nav:NavController,public http:HttpClient){} 

  userId;//登录用户的id
  data;
  ionViewWillEnter(){
    this.userId=localStorage.getItem('userId');
    this.http.post('/api/tabs/my',{"uid":this.userId}).subscribe(res=>{
      console.log(res)
      this.data=res[0];
    })
  }
  setMyself(){
    this.nav.navigateForward("/setmyself");
  }
  goSet(){
    this.nav.navigateForward("/set");
  }
  goMylike(){
    localStorage.setItem('uid',this.userId)
    this.nav.navigateForward("/mylike");
  }
  goMycollect(){
    localStorage.setItem('uid',this.userId)
    this.nav.navigateForward("/mycollect");
  }
  goMyfollow(){
    localStorage.setItem('uid',this.userId)
    this.nav.navigateForward("/myfollow");
  }
  goMycreate(){
    localStorage.setItem('uid',this.userId)
    this.nav.navigateForward("/myself");
  }
  recommentPoem(){
    this.nav.navigateForward("/recommentpoem");
  }  
  aboutUs(){
    this.nav.navigateForward("/aboutus");
  }
  
}
