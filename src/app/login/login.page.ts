import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public nav: NavController,public http:HttpClient) { }

  ngOnInit() {
  }


  // headers=new HttpHeaders(
  //   {
  //     'Content-Type':'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //     'Accept': '*/*'
  //   }
  // );
  phone; //用户手机号
  pwd;  //用户密码
  arr; //将请求返回的数据赋给arr
  ID; //用户id
  inp; //页面的两个输入框
  data;

  login(){
    this.http.post('/api/tabs/login',{"user":this.phone,"password":this.pwd}).subscribe(res=>{
      console.log(res);
      this.data=res;
      if(this.data.status==0){
        document.getElementById("info").innerHTML=this.data.info;
      }
      if(this.data.status==1){
        document.getElementById("info").innerHTML="";
        localStorage.setItem("userId",this.data.info[0].uid);
        this.nav.navigateForward("/tabs/home");
      }
    })
  }
   
  
 
  register(){  //注册功能
    this.nav.navigateForward("/register");
  }
}
