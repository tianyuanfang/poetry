import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-poemgamethree',
  templateUrl: './poemgamethree.page.html',
  styleUrls: ['./poemgamethree.page.scss'],
})
export class PoemgamethreePage implements OnInit {

  constructor(public nav:NavController,public http:HttpClient) { }

  ngOnInit() {
  }
  Q='';//答题题号
  A='';//答案
  MyA='';//我的答案
  timeHandle;//定时器
  private time:number;//倒数时间
  num=0;//题数
  allquestion;//所有题目
  question;//单个问题小方块
  Question;//单个问题
  flag=false;//标志是否答题
  tt;//记录时间的函数
  questionTime=0 ;//回答类型二问题的总时间

  ionViewWillEnter(){
    this.Q=localStorage.getItem("Q");
    this.A=localStorage.getItem("A");
    this.MyA=localStorage.getItem("MyA");
    var q=new Promise((resolved)=>{
      this.http.get('/api/tabs/answer/question').subscribe(res=>{
        console.log("question",res);
        this.allquestion=res['two'];
        this.time=20;
        resolved("ok");
      })
  }).then((r1)=>{
      console.log(r1);
      //类型二总的题目时间计时
      localStorage.setItem('sumTime2','0:00');
      this.tt = setInterval(()=>{
        this.questionTime++;
        localStorage.setItem("sumTime2",this.calculateTime(this.questionTime)) ; //倒计时
      },1000);

      //每道题的时间倒计时
      this.timeHandle=setInterval(()=>{

        if(this.time==20||this.flag){
            if(this.num!=0){
              if(! (this.num==5&&this.flag)){
                this.time=20;
              }
              if(this.num==5&&this.flag){
                clearInterval(this.timeHandle);
                clearInterval(this.tt);
                localStorage.setItem('Q',this.Q);
                localStorage.setItem('A',this.A);
                localStorage.setItem('MyA',this.MyA);
                this.nav.navigateForward("/poemgametwo");
              }
            }
            this.Question=this.allquestion[this.num];
            this.question=this.allquestion[this.num].content.split('');
            console.log(this.Question);
            this.Q=this.Q+','+this.Question.qtid;
            this.A=this.A+','+this.Question.answer;
            if(this.num>0&&!this.flag){
              this.MyA=this.MyA+','+" ";
            }
            this.num++;
            this.flag=false;
            document.getElementById("answer").innerText="";
            this.text="";
        }

        this.time--;
        // document.getElementById('time').innerHTML = this.time + 's';

        if(this.time==0||this.flag){
          this.time=20;
        }

        if(this.time==20&&this.num==5||(this.num==5&&this.flag)){
          clearInterval(this.timeHandle);
          clearInterval(this.tt);
          this.MyA=this.MyA+','+" ";
          localStorage.setItem('Q',this.Q);
          localStorage.setItem('A',this.A);
          localStorage.setItem('MyA',this.MyA);
          this.nav.navigateForward("/poemgametwo");
        }
      },1000)

    }).catch((err)=>{
      console.log("出现错误");
    })
    
  }
  

  //计算答题总时间
  calculateTime(time) {
    var spit = ":";
    var second = "00";
    var min = "0";
    var result = "";
    
    if(time % 60 != 0) { //秒
      if(time % 60 >= 10) {
          second = (time % 60);
      } else {
          second = "0" + time % 60;
      }
    }
    
    if(parseInt(time / 60) != 0) { //分
      min = parseInt(time / 60);
  
    }
    result = min + spit + second;
    return result;
  }
 //将选中的字呈现在下方div中
  text="";//标记选中的字
  ans(i){
    this.text=this.text+this.question[i];
    document.getElementById("answer").innerText=this.text;
  }

  //标记总的答题个数
  sumQuestionNum;
  button(){
    this.flag=true;
    this.MyA=this.MyA+','+document.getElementById("answer").innerText;
    if(document.getElementById("answer").innerText==this.allquestion[this.num-1].answer){
      console.log("正确");
      this.sumQuestionNum=parseInt(localStorage.getItem("sumQuestionNum"));
      this.sumQuestionNum++;
      localStorage.setItem("sumQuestionNum",this.sumQuestionNum);
    }
  }

}
