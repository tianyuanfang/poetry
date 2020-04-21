import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(public nav: NavController, ) { }

  ngOnInit() {
  }
//返回上一页
  back() {
    this.nav.back();
  }
//搜索,根据类别显示
  searchText;
  search(i){
    if(i==1){
      localStorage.setItem('searchText','风景');
    }else if(i==2){
      localStorage.setItem('searchText','离别');
    }else if(i==3){
      localStorage.setItem('searchText','思乡');
    }else if(i==4){
      localStorage.setItem('searchText','战争');
    }else{
      localStorage.setItem('searchText',this.searchText);
    }
    this.nav.navigateForward("/searchdetail");
  }

  
}
