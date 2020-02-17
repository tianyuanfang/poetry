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
//搜索
  searchText;
  search(){
    localStorage.setItem('searchText',this.searchText);
    this.nav.navigateForward("/searchdetail");
  }

//根据类别显示
  fun(i){
    if(i==1){
      localStorage.setItem('searchText','风景');
    }else if(i==2){
      localStorage.setItem('searchText','离别');
    }else if(i==3){
      localStorage.setItem('searchText','思乡');
    }else{
      localStorage.setItem('searchText','诗经');
    }
    this.nav.navigateForward("/searchdetail");
  }

  
}
