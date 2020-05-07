import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController } from '@ionic/angular';
import { isRegExp } from 'util';

@Component({
  selector: 'app-searchdetail',
  templateUrl: './searchdetail.page.html',
  styleUrls: ['./searchdetail.page.scss'],
})
export class SearchdetailPage implements OnInit {

  constructor(public nav: NavController, public http:HttpClient) { }

  ngOnInit() {
  }

  searchText;//搜索内容
  result1;result2;result3;
  title=[];
  sentence=[];
  ionViewWillEnter(){
    this.searchText=localStorage.getItem("searchText");
    this.http.post('/api/home/search',{"searchText":this.searchText}).subscribe(res=>{
      console.log(res)
      if(res['result1']) {
        this.result1=res['result1'];
      }
      if(res['result3']) this.result3=res['result3'];
      if(res['result2']){
        this.result2=res['result2'];
        for(var i=0;i<this.result2.length;i++){
          var arr=this.result2[i].poem.split("\n");
          for(var j=0;j<arr.length;j++){
            if(arr[j].indexOf(this.searchText)>=0){
              this.sentence[i]=arr[j];
            }
          }
        }
        console.log(this.sentence);
      } 
    })
  }

  back() {
    this.nav.back();
  }

  goPoemdetail1(i){
    localStorage.setItem("poemPid",this.result1[i].pid);
    this.nav.navigateForward("/hometail");
  }
  goPoemdetail2(i){
    localStorage.setItem("poemPid",this.result2[i].pid);
    this.nav.navigateForward("/hometail");
  }
  goPoemdetail3(i){
    localStorage.setItem("poemPid",this.result3[i].pid);
    this.nav.navigateForward("/hometail");
  }
}
