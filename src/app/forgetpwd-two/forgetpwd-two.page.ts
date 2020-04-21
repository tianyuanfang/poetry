import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgetpwd-two',
  templateUrl: './forgetpwd-two.page.html',
  styleUrls: ['./forgetpwd-two.page.scss'],
})
export class ForgetpwdTwoPage implements OnInit {

  constructor(public nav: NavController,) { }

  ngOnInit() {
  }

  back() {
    this.nav.back();
  }

  sure(){
    this.nav.navigateForward("/login");
  }
}
