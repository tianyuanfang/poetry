import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController ,NavParams} from '@ionic/angular';

@Component({
  selector: 'app-hometotal',
  templateUrl: './hometotal.page.html',
  styleUrls: ['./hometotal.page.scss'],
})
export class HometotalPage implements OnInit {

  selectedTheme=["全部","苏轼","李白","杜甫","辛弃疾","王维","白居易","李商隐","纳兰性德","爱情","禅","战争","离别","孤独","壮志","思乡","田园","写景","唐诗三百首","宋词三百首","道德经"];  Author=[]
  constructor(public nav: NavController,) {
     
   }

  ngOnInit() {
  }
  back() {
    this.nav.back();
  }
  //进入诗词列表页
  poemtype;//当前首页浏览的主题，默认为全部。
  poem(i){
    this.poemtype=this.selectedTheme[i];
    localStorage.setItem('poemtype',this.poemtype);
    this.nav.navigateForward("/home");
  }
 
}
