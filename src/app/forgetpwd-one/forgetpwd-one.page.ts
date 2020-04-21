import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgetpwd-one',
  templateUrl: './forgetpwd-one.page.html',
  styleUrls: ['./forgetpwd-one.page.scss'],
})
export class ForgetpwdOnePage implements OnInit {

  constructor(public nav: NavController,) { }

  ngOnInit() {
  }

  back() {
    this.nav.back();
  }

  next(){
    this.nav.navigateForward("/forgetpwd-two");
  }
}
