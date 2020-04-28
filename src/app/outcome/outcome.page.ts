import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.page.html',
  styleUrls: ['./outcome.page.scss'],
})
export class OutcomePage implements OnInit {

  constructor(public nav:NavController,public http:HttpClient) { }

  ngOnInit() {
  }
  userId;//登录者的id
  data;
  sumQuestionNum;
  sumQuestionTime;
  time=[];
  time1;
  time2;
  time3;
  ionViewWillEnter(){

    this.userId=localStorage.getItem('userId');
    this.http.post('/api/tabs/my',{"uid":this.userId}).subscribe(res=>{
      console.log(res)
      this.data=res[0];
    })
    this.sumQuestionNum=localStorage.getItem("sumQuestionNum");
    this.time1=localStorage.getItem("sumTime1");
    this.time2=localStorage.getItem("sumTime2");
    this.time3=localStorage.getItem("sumTime3");
    this.time1=this.time1.split(":");
    this.time2=this.time2.split(":");
    this.time3=this.time3.split(":");
    this.time[1]=(parseInt(this.time1[1])+parseInt(this.time2[1])+parseInt(this.time3[1])) % 60;
    this.time[0]=(parseInt(this.time1[0])+parseInt(this.time2[0])+parseInt(this.time3[0]))+Math.floor((parseInt(this.time1[1])+parseInt(this.time2[1])+parseInt(this.time3[1])) / 60);   
    if(this.time[1]<10){
      this.time[1]="0"+this.time[1];
    }
    console.log(this.time);
    this.sumQuestionTime=this.time[0]+" "+this.time[1];
    console.log(typeof(this.sumQuestionTime));
    console.log(this.sumQuestionNum);

    
  }
  //回到答题首页
  goAnswer(){
    this.http.post('/api/tabs/answer/outcome',{"sumNum":this.sumQuestionNum,"sumTime":this.sumQuestionTime,"uid":this.userId}).subscribe(res=>{
      console.log(this.sumQuestionNum,this.sumQuestionTime,this.userId);
      
    this.nav.navigateForward("/answer");
    })
  }

}
