import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hometotal',
  templateUrl: './hometotal.page.html',
  styleUrls: ['./hometotal.page.scss'],
})
export class HometotalPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  back() {
    this.nav.back();
  }
  go(){
    this.nav.navigateForward("/hometail");
  }
}
