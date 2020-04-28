import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  phone;
  pwd;
  againpwd;
  data;
  constructor(public nav: NavController,public http:HttpClient) { }

  ngOnInit() {
  }

  back() {
    this.nav.back();
  }
  register(){
    if(this.pwd!=this.againpwd){
      document.getElementById("info").innerHTML="两次密码不一致";
    }else{
      this.http.post('/api/tabs/register',{"user":this.phone,"password":this.pwd}).subscribe(res=>{
        console.log(res);
        this.data=res;
        if(this.data.status==0){
          document.getElementById("info").innerHTML=this.data.info;
        }
        if(this.data.status==1){
          document.getElementById("info").innerHTML="";
          this.nav.navigateForward("/regist-success");
        }
      })
    }
  }
}
