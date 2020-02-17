import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mylike',
  templateUrl: './mylike.page.html',
  styleUrls: ['./mylike.page.scss'],
})
export class MylikePage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  back() {
    this.nav.back();
  }
}
