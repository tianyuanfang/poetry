import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hometail',
  templateUrl: './hometail.page.html',
  styleUrls: ['./hometail.page.scss'],
})
export class HometailPage{
  constructor(public nav:NavController) { }
  back() {
    this.nav.navigateForward("/tabs/home")
  }
}
