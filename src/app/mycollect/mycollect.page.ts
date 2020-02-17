import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mycollect',
  templateUrl: './mycollect.page.html',
  styleUrls: ['./mycollect.page.scss'],
})
export class MycollectPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  back() {
    this.nav.back();
  }
  goPoemdetail(){
    this.nav.navigateForward("/hometail");
  }
}
