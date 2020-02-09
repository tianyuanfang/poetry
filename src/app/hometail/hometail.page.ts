import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hometail',
  templateUrl: './hometail.page.html',
  styleUrls: ['./hometail.page.scss'],
})
export class HometailPage{
  constructor(public nav:NavController) { }

  Flag=true;
  isActive=0;
  back() {
    this.nav.back();
  }

  // clickZan(i){
  //   if(this.Flag[i]==false){
  //     this.Flag[i]=true;
  //   }else{   
  //     this.Flag[i]=false;
  //   }
  // }

  clickZan(){
    if(this.Flag==false){
      this.Flag=true;
    }else{   
      this.Flag=false;
    }
  }


  isClick(i){
    this.isActive=i;
  }

  button = document.getElementsByTagName("button")[0];
  p = document.getElementsByTagName("p")[0];

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
