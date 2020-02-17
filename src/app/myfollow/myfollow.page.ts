import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { concat } from 'rxjs/internal/observable/concat';

@Component({
  selector: 'app-myfollow',
  templateUrl: './myfollow.page.html',
  styleUrls: ['./myfollow.page.scss'],
})
export class MyfollowPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  back() {
    this.nav.back();
  }

  isActive=0;
  isClick(i){
    this.isActive=i;
  }
//关注否
num;
btn;
flag=true;
follow(i){
  this.btn=document.getElementsByClassName('btn')[i];
  if(this.flag==true){
    console.log(11);
    document.getElementsByClassName('btn')[i].innerHTML = "关注";
  }else{
    document.getElementsByClassName('btn')[i].innerHTML = "已关注";
  }
  this.flag=!this.flag;
  console.log(this.flag,i);
}













}
