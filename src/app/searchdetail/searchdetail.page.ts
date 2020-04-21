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
  ionViewWillEnter(){
    this.searchText=localStorage.getItem("searchText");
    this.http.post('/api/home/search',{"searchText":this.searchText}).subscribe(res=>{
      console.log(res)
      // if(res.result1) {
      //   this.result1=res.result1;
      //   for(var i=0;i<this.result1.length;i++){
      //     // var re = new RegExp("" + this.searchText + "", "gmi");
      //     // this.result1[i].author= this.result1[i].author.replace(re, '<span style="color:red;font-weight: bold;">' + this.searchText + '</span>');
      //     // this.result1[i].author = this.result1[i].author.replace(/白/ig,"<span style='color: red;'>$&</span>");
      //   }
      // }
      
      // if(res.result2) this.result2=res.result2;
      // if(res.result3) this.result3=res.result3;
    })
  }

  back() {
    this.nav.back();
  }
}
