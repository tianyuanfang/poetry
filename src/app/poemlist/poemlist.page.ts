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
  data;
  ionViewWillEnter(){//每次页面进入的时候都触发
    this.poemlist=localStorage.getItem("poemlist");
    this.poemsrc=localStorage.getItem("poemimg");
    this.http.post('/api/tabs/poemlist',{"poemlist":this.poemlist}).subscribe(res=>{
      console.log(res)
      this.data=res;
  })
  }
}
