import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-hometail',
  templateUrl: './hometail.page.html',
  styleUrls: ['./hometail.page.scss'],
})
export class HometailPage{
  constructor(public nav:NavController,public http:HttpClient) { }

  poemPid;//记录本地存储的诗词id
  data;//承载后端传回的信息
  extract;
  ionViewWillEnter(){
    this.poemPid=localStorage.getItem('poemPid');
    this.http.post('/api/tabs/hometail',{"pid":this.poemPid}).subscribe(res=>{
      console.log(res)
      this.data=res[0];
      this.extract=this.data.poem.split('\n');
      console.log(this.extract);
    })
    
  }

  //标记选中那个switch
  isActive=0;
  isClick(i){
    this.isActive=i;
  }

  //返回上一页
  back() {
    this.nav.back();
  }


  showall() {
    var button = document.getElementsByTagName("button")[0];
    var p = document.getElementsByTagName("p")[0];

      if(button.innerHTML == "展开"){
          p.classList.remove("many-txt");
          p.classList.add("all-txt");
          button.innerHTML = "点击收起";
      }
      else{
          p.classList.remove("all-txt");
          p.classList.add("many-txt");
          button.innerHTML = "展开";
      }
  }

}
