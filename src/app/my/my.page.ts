import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-my',
  templateUrl: './my.page.html',
  styleUrls: ['./my.page.scss'],
})
export class MyPage {

  constructor(public nav:NavController,){} 

  myself(){
    this.nav.navigateForward("/myself");
  }
  setMyself(){
    this.nav.navigateForward("/setmyself");
  }
  goSet(){
    this.nav.navigateForward("/set");
  }
  goMylike(){
    this.nav.navigateForward("/mylike");
  }
  goMycollect(){
    this.nav.navigateForward("/mycollect");
  }
  goMyfollow(){
    this.nav.navigateForward("/myfollow");
  }
  goMycreate(){
    this.nav.navigateForward("/myself");
  }
  recommentPoem(){
    this.nav.navigateForward("/recommentpoem");
  }  
  aboutUs(){
    this.nav.navigateForward("/aboutus");
  }
  
}
