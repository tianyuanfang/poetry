import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-recommentpoem',
  templateUrl: './recommentpoem.page.html',
  styleUrls: ['./recommentpoem.page.scss'],
})
export class RecommentpoemPage implements OnInit {

  constructor(public nav: NavController,public http:HttpClient) { }

  ngOnInit() {
  }
  data;
  ionViewWillEnter(){
    this.http.get('/api/tabs/my/recommend').subscribe(res=>{
      console.log("推荐观看",res)
      this.data=res;
    })
  }


  
  back() {
    this.nav.back();
  }
  goPoemdetail(i){
    localStorage.setItem('poemPid',this.data[i].pid);
    this.nav.navigateForward("/hometail");
  }
}
