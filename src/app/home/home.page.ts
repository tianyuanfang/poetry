import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {  ActivatedRoute, Params } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { EventService } from'../services/event.service';//此页面消失的时候发送广播：引入


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  
  data;
  poemtype='全部';//标记主页浏览的类别，默认为全部
  poem;

  constructor(public nav:NavController,public http:HttpClient,public eventService: EventService){
   
  }

  ngOnInit() {
    //回应广播事件
    this.eventService.eventEmitter.on('action', () => {
      console.log("回应");
      this.poemtype=localStorage.getItem("poemtype");
      var span=document.getElementById("poemtype");
      span.innerHTML=this.poemtype?this.poemtype:"全部";
  
      this.http.post('/api/tabs/home',{"author":span.innerHTML}).subscribe(res=>{
          console.log(res)
          this.poem=res;
      })
    })
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
