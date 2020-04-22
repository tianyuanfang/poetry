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
  cid;//标注看的是哪个作品的评论
  userID;
  data;
  ionViewWillEnter(){
    this.cid=localStorage.getItem('cid');
    this.http.post('/api/tabs/poem/comment',{'cid':this.cid}).subscribe(res=>{
      console.log(res);
      this.data=res;
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
  this.http.post('/api/tabs/poem/addcomment',{uid:2,time:this.time,content:this.inpcomment.value,cid:this.cid}).subscribe(res=>{
      // console.log(res);
      this.http.post('/api/tabs/poem/info',{uid:2}).subscribe(data=>{
        console.log(data);
        this.head=data[0]['avatar'];
        this.userName=data[0]['nickname'];
        for(var i=0;i<2;i++){
          $(".exter").append("<li class='exterli' style='padding-left:10px;padding-top:10px;'><span id='user' style='float: left;' ><img src='' id='uimg' style='width:30px;height:30px;border-radius:50%;'></span><div id='commentdetail'><p style='margin:0;padding-left: 10%;padding-top: 5px;' id='p1'></p><p style='margin:0;padding-left: 10%;padding-top: 5px;' id='p2'></p><p style='margin:0;padding-left:10%;padding-top:5px;font-size:10px;color:gray;' class='data' id='p3'></p></div></li>");
          $("#uimg").attr('src','../../assets/'+this.head);
          $("#p1").text(this.userName);//username
          $("#p2").text(this.inpcomment.value);
          $("#p3").text(this.time);//时间
          this.inpcomment.value='';
        }
        
      })
      
    });
  
}

month;
strdate;
hour;
minutes;
second;
getDate(){//获取当前时间
  let now= new Date();
  let _month = ( 10 > (now.getMonth()+1) ) ? '0' + (now.getMonth()+1) : now.getMonth()+1;
  let _day = ( 10 > now.getDate() ) ? '0' + now.getDate() : now.getDate();
  let _hour = ( 10 > now.getHours() ) ? '0' + now.getHours() : now.getHours();
  let _minute = ( 10 > now.getMinutes() ) ? '0' + now.getMinutes() : now.getMinutes();
  let _second = ( 10 > now.getSeconds() ) ? '0' + now.getSeconds() : now.getSeconds();
  return now.getFullYear() + '-' + _month + '-' + _day + ' ' + _hour + ':' + _minute + ':' + _second;
}

}
