import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {  ActivatedRoute, Params } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  

  constructor(public nav:NavController,){}  
  
  gohometotal(){
    console.log(111);
    this.nav.navigateForward("/hometotal");
  }
  //进入诗词详情页
  gohometail(){
    this.nav.navigateForward("/hometail");
  }
  //进入搜索页
  search(){
    this.nav.navigateForward("/search");
  }

}
