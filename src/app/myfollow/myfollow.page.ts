import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { concat } from 'rxjs/internal/observable/concat';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-myfollow',
  templateUrl: './myfollow.page.html',
  styleUrls: ['./myfollow.page.scss'],
})
export class MyfollowPage implements OnInit {

  constructor(public nav: NavController,public http:HttpClient) { }

  ngOnInit() {
  }
  back() {
    this.nav.back();
  }
  userId;//登录用户的ID
  uid;
  fan;//关注我的
  attention;//我关注的
  flag0=[];//关注标记
  flag1=[];//粉丝标记
  
  ionViewWillEnter(){
    this.userId=localStorage.getItem('userId');
    this.uid=localStorage.getItem('uid');
    this.http.post('/api/tabs/my/attention',{"uid":this.uid}).subscribe(res=>{
      console.log("attention",res)
      this.attention=res;
      for(var k=0;k<this.attention.length;k++){
        this.flag1[k]=false;
        this.flag0[k]=true;
      }
      this.http.post('/api/tabs/my/fan',{"uid":this.uid}).subscribe(res=>{
        console.log("fan",res)
        this.fan=res;
        //判断这个粉丝我是否关注的
        for(var i=0;i<this.fan.length;i++){
          for(var j=0;j<this.attention.length;j++){
            if(this.fan[i].uid==this.attention[j].uid){
              this.flag1[i]=true;
              document.getElementsByClassName('btn1')[i].innerHTML = "已关注";
              break;
            }
          }
        }
      })
    })
    
  }
//切换我的关注还是我的粉丝
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
//我不再关注
follow(i){
  if(this.flag0[i]==true){
    document.getElementsByClassName('btn')[i].innerHTML = "关注";
    this.http.post('/api/tabs/my/delAttention',{"uid":this.userId,"aid":this.attention[i].uid}).subscribe(res=>{
      // console.log(res)
    })
  }else{
    document.getElementsByClassName('btn')[i].innerHTML = "已关注";
    this.http.post('/api/tabs/my/addAttention',{"uid":this.userId,"aid":this.attention[i].uid}).subscribe(res=>{
      // console.log(res)
    })
  }
  this.flag0[i]=!this.flag0[i];
}
//我是否关注了这个粉丝
followme(i){
  if(this.flag1[i]==true){
    console.log(11);
    document.getElementsByClassName('btn1')[i].innerHTML = "关注";
    this.http.post('/api/tabs/my/delAttention',{"uuid":this.userId,"uid":this.attention[i].uid}).subscribe(res=>{
      console.log(res)
    })
  }else{
    document.getElementsByClassName('btn1')[i].innerHTML = "已关注";
    this.http.post('/api/tabs/my/addAttention',{"uuid":this.userId,"uid":this.attention[i].uid}).subscribe(res=>{
      console.log(res)
    })
  }
  this.flag1[i]=!this.flag1[i];
}

//跳转到关注的用户的首页
attentionDetail(i){
  localStorage.setItem('uid',this.attention[i].uid);
  this.nav.navigateForward("/myself");
}
//跳转到粉丝的首页
fanDetail(i){
  localStorage.setItem('uid',this.fan[i].uid);
  this.nav.navigateForward("/myself");
}











}
