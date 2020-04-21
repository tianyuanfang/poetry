import { Component, OnInit } from '@angular/core';
import { NavController ,NavParams} from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import * as $ from 'jquery';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {

  constructor(public nav: NavController,public http:HttpClient) { }

  ngOnInit() {
  }

  back() {
    this.nav.back();
  }
  upid;//标注看的是哪个作品的评论
  userID;
  ionViewWillEnter(){
    this.http.post('/api/poem/comment',{'pid':this.upid}).subscribe(data=>{
      console.log(data);
  })
}
  //评论作品
inpcomment;
head;//头像
userName;//用户名
time;
comment(){
  this.inpcomment=document.getElementById('inpcomment');
  this.time=this.getDate();
  this.http.post('/api/poem/addcomment',{userID:this.userID,date:this.time,context:this.inpcomment.value,projectID:this.upid}).subscribe(data=>{
      console.log(data);
      this.head=data['head'];
      this.userName=data['userName'];
      $(".exter").append("<li class='exterli'><span id='user' ><img src='' id='uimg'></span><div id='commentdetail'><p style='margin:0' id='p1'></p><p style='margin:0  ' id='p2'></p><p style='margin:0  ' class='data' id='p3'></p></div></li>");
      $("#uimg").attr('src',this.head);
      $("#p1").text(this.userName);//username
      $("#p2").text(this.inpcomment.value);
      $("#p3").text(this.time);//时间
      this.inpcomment.value='';
    });
  
}

month;
strdate;
hour;
minutes;
getDate(){   //获取当前时间函数
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  this.month = date.getMonth() + 1;
  this.strdate = date.getDate();
  this.hour= date.getHours();
  this.minutes=date.getMinutes();
  if (this.month >= 1 && this.month <= 9) {
      this.month = "0" + this.month;
  }
  if (this.strdate >= 0 && this.strdate <= 9) {
      this.strdate = "0" + this.strdate;
  }
  if (this.hour >= 0 && this.hour <= 9) {
    this.hour = "0" + this.hour;
  }
  if (this.minutes >= 0 && this.minutes <= 9) {
    this.minutes = "0" + this.minutes;
  }
  var currentdate = date.getFullYear() + seperator1 + this.month + seperator1 + this.strdate
          + " " + this.hour+ seperator2 + this.minutes;
          // + seperator2 + date.getSeconds();
  return currentdate;
}
}
