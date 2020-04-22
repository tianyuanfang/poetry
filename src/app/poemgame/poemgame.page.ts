import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-poemgame',
  templateUrl: './poemgame.page.html',
  styleUrls: ['./poemgame.page.scss'],
})
export class PoemgamePage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  back() {
    this.nav.back();
  }
  goPoemgameOne(){
    this.nav.navigateForward("/poemgameone");
  }
}
