import { Component, OnInit } from '@angular/core';
import { NavController ,NavParams} from '@ionic/angular';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-poemlist',
  templateUrl: './poemlist.page.html',
  styleUrls: ['./poemlist.page.scss'],
})
export class PoemlistPage implements OnInit {

  constructor(public nav: NavController,public http:HttpClient) { }

  ngOnInit() {
  }
  back() {
    this.nav.back();
  }
  poemlist;
  poemsrc;
  classify;
  data;
  ionViewWillEnter(){//每次页面进入的时候都触发
    this.poemlist=localStorage.getItem("poemlist");
    this.poemsrc=localStorage.getItem("poemimg");
    this.classify=localStorage.getItem("classify");
    if(this.classify=='selections'){
      this.http.post('/api/tabs/poem/anthology',{"poemlist":this.poemlist}).subscribe(res=>{
        console.log(res)
        this.data=res;
      })
    }
    if(this.classify=='theme'){
      this.http.post('/api/tabs/poem/theme',{"poemlist":this.poemlist}).subscribe(res=>{
        console.log(res)
        this.data=res;
      })
    }
    if(this.classify=='scene'){
      this.http.post('/api/tabs/poem/scene',{"poemlist":this.poemlist}).subscribe(res=>{
        console.log(res)
        this.data=res;
      })
    }
  }


  goPoemdetail(i){
    console.log(this.data[i].pid);
    localStorage.setItem('poemPid',this.data[i].pid);
    this.nav.navigateForward("/hometail");
  }
}
