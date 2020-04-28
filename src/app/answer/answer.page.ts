import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.page.html',
  styleUrls: ['./answer.page.scss'],
})
export class AnswerPage  {
  
  userId;
  myAvatar;//本人头像
  nickName;//本人昵称
  myRight_num;//本人正确的题数
  data;
  minute;
  second;
  result1=[];//标记前三名
  result2=[];//标记后面的考生
  constructor(public nav:NavController,public http:HttpClient){
    this.userId=localStorage.getItem("userId");
    this.http.post('/api/tabs/answer',{"uid":this.userId}).subscribe(res=>{
      console.log("answer",res)
      this.data=res;
      if(this.data.index>=0){
        this.myAvatar=this.data.result[this.data.index].avatar;
        this.nickName=this.data.result[this.data.index].nickname;
        this.myRight_num=this.data.result[this.data.index].right_num;
        this.minute=this.data.result[this.data.index].time.split(" ")[0];
        this.second=this.data.result[this.data.index].time.split(" ")[1];
      }else{
        this.http.post('/api/tabs/my',{"uid":this.userId}).subscribe(res=>{
          console.log("people",res);
          this.myAvatar=res[0].avatar;
          this.nickName=res[0].nickName;
          this.myRight_num=0;
          this.minute=0;
          this.second='00';
        })
      }
      
      for(var i=0;i<3;i++){
        this.result1[i]=this.data.result[i];
      }
      for(var i=0,j=3;j<this.data.result.length;i++,j++){
        this.result2[i]=this.data.result[j];
      }
      console.log(this.result1,this.result2);
      
    })


  } 

  //呈现用户答题详情
  presentDetail(){
    if(this.data.index>=0){
      this.nav.navigateForward("/poemdetail");
    }
  }


  showall() {
    var button = document.getElementsByTagName("button")[0];
    var p = document.getElementsByTagName("p")[0];

      if(button.innerHTML == "展开"){
          p.classList.remove("many-txt");
          p.classList.add("all-txt");
          button.innerHTML = "点击收起";
      }
      else{
          p.classList.remove("all-txt");
          p.classList.add("many-txt");
          button.innerHTML = "展开";
      }
  }


  play(){
    this.nav.navigateForward("/poemgame");
  }
}
