import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { setInterval } from 'timers';

@Component({
  selector: 'app-poemgame',
  templateUrl: './poemgame.page.html',
  styleUrls: ['./poemgame.page.scss'],
})
export class PoemgamePage implements OnInit {
  private time:number;
  private fun;
  constructor(public nav: NavController) {
    this.time=20;
    if(this.fun!=null){//判断计时器是否为空
      clearInterval(this.fun);
      this.fun=null;
    }

    // this.fun=setInterval(()=>{
    //   this.tt();
    // },1000)
  }

  ngOnInit() {
  }
  num=3;
  ionViewWillEnter(){
    this.num--;
    console.log(this.num);
  }
 

//倒计时
    
  tt(){
  　this.time--; 
  　document.getElementById('time').innerHTML = this.time + 's'; 
  　if(this.time == 0){
    console.log('哈哈哈');
     　　window.clearInterval(this.fun);
         location.reload(); 
  　}
  }

  
  back() {
    this.nav.back();
  }
  goPoemgameOne(){
    this.nav.navigateForward("/poemgameone");
  }

  



}
