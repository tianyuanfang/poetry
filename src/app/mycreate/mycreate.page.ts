import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mycreate',
  templateUrl: './mycreate.page.html',
  styleUrls: ['./mycreate.page.scss'],
})
export class MycreatePage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  back() {
    this.nav.back();
  }
}
