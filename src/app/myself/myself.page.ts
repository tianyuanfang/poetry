import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-myself',
  templateUrl: './myself.page.html',
  styleUrls: ['./myself.page.scss'],
})
export class MyselfPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  back() {
    this.nav.back();
  }

  flag=false;
  hideList;
  showList(){ //控制下拉列表的显示与隐藏
    this.hideList=document.getElementsByClassName('hideList');
    if(this.flag==false){
      this.hideList[0].style.display='block';
    }else{
      this.hideList[0].style.display='none';
    }
    this.flag=!this.flag;
  }
}
