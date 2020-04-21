import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-regist-success',
  templateUrl: './regist-success.page.html',
  styleUrls: ['./regist-success.page.scss'],
})
export class RegistSuccessPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  goLogin(){
    this.nav.navigateForward("/login");
  }
}
