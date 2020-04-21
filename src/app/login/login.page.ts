import { Component, OnInit } from '@angular/core';
import { NavController ,NavParams, AlertController,} from '@ionic/angular';
import {HttpClient,HttpHeaders} from '@angular/common/http';
// import { ForgetpwdPage } from '../forgetpwd/forgetpwd';
// import { RegisterPage } from '../register/register';
// import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public nav: NavController,) { }

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

  login(){
    this.nav.navigateForward("/tabs/home");
  }
   
  // login(){   //登录验证功能
  //   this.inp=document.getElementsByClassName('inp')
  //   if(this.inp[0].value==''){
  //     const alert4= this.alertCtrl.create({
  //       title: '登录失败',
  //       subTitle: '手机号信息不能为空',
  //       buttons: ['OK']
  //     });
  //     alert4.present();
  //   }else{
  //     this.http.post('/api/login',{"phone":this.phone,"pwd":this.pwd}).subscribe(data=>{
  //       this.arr=data;
  //       console.log(this.arr);
  //       if(this.arr.status==0){
  //         const alert3 = this.alertCtrl.create({
  //           title: '登录失败',
  //           subTitle: '该手机号还未被注册',
  //           buttons: ['OK']
  //         });
  //         alert3.present();
  //         this.inp=document.getElementsByClassName('inp');
  //         console.log(this.inp);
  //         this.inp[1].value='';       
  //       }
  //       if(this.arr.status==1){ //账号被冻结
  //         const alert1 = this.alertCtrl.create({
  //           title: '登录异常',
  //           subTitle: '你的账号已被冻结，请您遵守我们的协议并且发表正当的言论，您的账号将在一个月之后解冻',
  //           buttons: ['OK']
  //         });
  //         alert1.present();
  //         this.inp=document.getElementsByClassName('inp');
  //         this.inp[0].value='';
  //         this.inp[1].value='';
  //       }
  //       if(this.arr.status==2){ //密码正确
  //         console.log('密码正确');
  //         this.ID=this.arr.id;
  //         localStorage.setItem("id",this.ID); //设置本地存储 将登陆的用户ID存起来
  //         this.app.getRootNavs()[0].setRoot(TabsPage);
  //       }
  //       if(this.arr.status==3){ //密码错误
  //         //弹框提示
  //         const alert2 = this.alertCtrl.create({
  //           title: '登录失败',
  //           subTitle: '请输入正确的密码信息',
  //           buttons: ['OK']
  //         });
  //         alert2.present();
  //         this.inp=document.getElementsByClassName('inp');
  //         console.log(this.inp);
  //         this.inp[1].value='';
  //       }
  //       console.log('post success');
  //     });
  //   }
    
  // }

  forgetPwd(){ //忘记密码
    this.nav.navigateForward("/forgetpwd-one");
  }
  register(){  //注册功能
    this.nav.navigateForward("/register");
  }
}
