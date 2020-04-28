import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-setpwd',
  templateUrl: './setpwd.page.html',
  styleUrls: ['./setpwd.page.scss'],
})
export class SetpwdPage implements OnInit {

  oldpwd;
  pwd;
  againpwd;
  userId;
  data;
  constructor(public nav: NavController, public http:HttpClient) { }

  ionViewWillEnter(){
    this.userId=localStorage.getItem("userId");
   
  }
  ngOnInit() {
  }
  setpwd(){
    if(this.pwd!==this.againpwd){
      document.getElementById("info").innerHTML="两次密码不一样";
    }
    else if(!this.pwd){
      document.getElementById("info").innerHTML="请填写新密码";
    }else{
      this.http.post('/api/tabs/setpwd',{"uid":this.userId,"oldpwd":this.oldpwd,"newpwd":this.pwd}).subscribe(res=>{
        console.log(res)
        this.data=res;
        document.getElementById("info").innerHTML=this.data.info;
        if(this.data.status==1){
          document.getElementById("info").innerHTML=this.data.info;
          this.nav.navigateForward("/login");
        }
      })
    }
  }

  back() {
    this.nav.back();
  }
}
