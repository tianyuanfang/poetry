import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController } from '@ionic/angular';
import { resolve } from 'url';

@Component({
  selector: 'app-poemgame',
  templateUrl: './poemgame.page.html',
  styleUrls: ['./poemgame.page.scss'],
})
export class PoemgamePage implements OnInit {
  
  
  constructor(public nav:NavController,public http:HttpClient){}
  
  ngOnInit() {}

  Q='';//答题题号
  A='';//答案
  MyA='';//我的答案
  timeHandle;//定时器
  private time:number;//倒数时间
  num=0;//题数
  allquestion;//所有题目
  question;//单个问题
  flag=false;//标志是否答题
  questionTime=0 ;//回答问题的总时间
  tt;//记录时间的函数

  ionViewWillEnter(){
    localStorage.setItem('sumQuestionNum','0');
    localStorage.setItem('Q',"");
    localStorage.setItem('A','');
    localStorage.setItem('MyA','');

    var q=new Promise((resolved)=>{
        this.http.get('/api/tabs/answer/question').subscribe(res=>{
          console.log("question",res);
          this.allquestion=res['one'];
          this.time=21;
          resolved("ok");
        })
    }).then((r1)=>{
        console.log(r1);
        //总的时间计时
        localStorage.setItem('sumTime1','0:00');
        // this.tt = setInterval(()=>{
        //   this.questionTime++;
        //   localStorage.setItem("sumTime1",this.calculateTime(this.questionTime)) ; //倒计时
        // },1000);

        //每道题倒计时
        this.timeHandle=setInterval(()=>{

            if(this.time==21||this.flag){
                if(this.num!=0){
                  if(! (this.num==5&&this.flag)){
                    this.time=21;
                  }
                  if(this.num==5&&this.flag){
                    clearInterval(this.timeHandle);
                    clearInterval(this.tt);
                    localStorage.setItem('Q',this.Q);
                    localStorage.setItem('A',this.A);
                    localStorage.setItem('MyA',this.MyA);
                    this.nav.navigateForward("/poemgamethree");
                  }
                }
                
                this.question=this.allquestion[this.num]
                console.log(this.question);
                this.Q=this.Q+','+this.question.qoid;
                this.A=this.A+','+this.question.answer;
                if(this.num>0&&!this.flag){
                  this.MyA=this.MyA+','+" ";
                }
                this.num++;
                this.flag=false;
            }

            this.time--;
            document.getElementById('time').innerHTML = this.time + 's'; 

            if(this.time==0||this.flag){
                this.time=21;
            }

            if((this.time==21&&this.num==5)||(this.num==5&&this.flag)){
              clearInterval(this.timeHandle);
              clearInterval(this.tt);
              this.MyA=this.MyA+','+" ";
              localStorage.setItem('Q',this.Q);
              localStorage.setItem('A',this.A);
              localStorage.setItem('MyA',this.MyA);
              this.nav.navigateForward("/poemgamethree");
            }
      },1000)

    }).catch((err)=>{
    console.log("出现错误");
  });
    

    
  }
 
//计算答题总时间
  // calculateTime(time) {
  //   var spit = ":";
  //   var second = "00";
  //   var min = "0";
  //   var result = "";
    
  //   if(time % 60 != 0) { //秒
  //     if(time % 60 >= 10) {
  //         second = (time % 60);
  //     } else {
  //         second = "0" + time % 60;
  //     }
  //   }
    
  //   if(parseInt(time / 60) != 0) { //分
  //         min = parseInt(time / 60);
      
  //   }
  //   result = min + spit + second;
  //   return result;
  // }

  //记录答对题的个数
  sumQuestionNum;
  ans(ans){
    this.flag=true;
    console.log(ans);
    console.log(this.question.answer);
    this.MyA=this.MyA+','+ans;

    if(ans==this.question.answer){
        console.log("正确");
        this.sumQuestionNum=parseInt(localStorage.getItem("sumQuestionNum"));
        this.sumQuestionNum++;
        localStorage.setItem("sumQuestionNum",this.sumQuestionNum);
    }
  }
    
  

}
