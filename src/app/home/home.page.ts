import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {  ActivatedRoute, Params } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  
  data;
  poemtype='全部';//标记主页浏览的类别，默认为全部
  poem;

  constructor(public nav:NavController,public http:HttpClient){
    // var api='/api/tabs/home';
    // this.http.get(api).subscribe(res=>{
    //     console.log(res)
    //     this.data=res[0];
    // })
    // this.http.post(api,{"post":'post data'}).subscribe(res=>{
    //   console.log(res)
    // })
  }

  

  ionViewDidLoad(){//仅页面创建的时候触发一次
    
  }

  ionViewWillEnter(){//每次页面进入的时候都触发
    this.poemtype=localStorage.getItem("poemtype");
    var span=document.getElementById("poemtype");
    span.innerHTML=this.poemtype?this.poemtype:"全部";

    this.http.post('/api/tabs/home',{"author":span.innerHTML}).subscribe(res=>{
        console.log(res)
        this.poem=res;
    })
  }
  
  gohometotal(){
    this.nav.navigateForward("/hometotal");
  }
  //进入诗词详情页
  gohometail(i){
    localStorage.setItem('poemPid',this.poem[i].pid);
    this.nav.navigateForward("/hometail");
  }
  //进入搜索页
  search(){
    this.nav.navigateForward("/search");
  }
  gologin(){
    this.nav.navigateForward("/login");
  }

}
