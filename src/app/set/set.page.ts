import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-set',
  templateUrl: './set.page.html',
  styleUrls: ['./set.page.scss'],
})
export class SetPage implements OnInit {

  constructor(public nav: NavController, public http:HttpClient) { }

  ngOnInit() {
  }
  userId;
  phone;
  ionViewWillEnter(){
    this.userId=localStorage.getItem("userId");
    this.http.post('/api/tabs/myphone',{"uid":this.userId}).subscribe(res=>{
      console.log(res)
      this.phone=res[0].account
    })
  }
  back() {
    this.nav.back();
  }
  goLogin(){
    localStorage.setItem('userId',"");
    this.nav.navigateForward("/login");
  }
  goSetdata(){
    this.nav.navigateForward("/setmyself");
  }
  goChangePw(){
    this.nav.navigateForward("/setpwd");
  }
}
