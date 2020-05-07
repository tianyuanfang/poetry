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

  avatar="avatar/00.jpg";
  nickname;
  sex;
  introduction;
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

  save(){
    console.log(this.nickname,this.sex,this.introduction);
    this.http.post('/api/tabs/my/info',{"sex":this.sex,"avatar":this.avatar,"nickname":this.nickname,"signature":this.introduction,"uid":this.userId}).subscribe(res=>{
      // console.log(res)

      this.nav.navigateForward("/my");
    })
    
  }

  img;//图片
  changeImg(event){
    //判断是否支持FileReader
    // if(window.FileReader) {
    //   var reader = new FileReader();
    // } else {
    //   alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
    // }
    //获取文件
    // console.log(event.target.files);
    // var file = event.srcElement.files[0];
    // // var imageType = /^image\//;
    // // //是否是图片
    // // if(!imageType.test(file.type)) {
    // //     alert("请选择图片！");
    // //     return;
    // // }
    // var that=this;
    // //读取完成
    // reader.onload = function(e) {
    //     //图片路径设置为读取的图片
    //     console.log(e.target);
    //     document.getElementById("img").src=e.target.result;
    //     that.img.src = e.target.result;
    //     // console.log(document.getElementsByClassName('file-box'));
    //     // document.getElementsByClassName('file-box')[i].style.background = "url("+e.target.result+")no-repeat";//回显图片
    //     // document.getElementsByClassName('file-box')[i].style.backgroundSize = '200px 160px';
    //     console.log('reader',reader)
    // };
    // reader.readAsDataURL(file);
    }
}


