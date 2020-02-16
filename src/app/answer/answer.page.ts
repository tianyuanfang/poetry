import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.page.html',
  styleUrls: ['./answer.page.scss'],
})
export class AnswerPage  {
  
  constructor(public nav:NavController,){} 
  
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


  play(){
    this.nav.navigateForward("/poemgame");
  }
}
