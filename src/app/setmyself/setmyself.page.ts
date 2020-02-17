import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-setmyself',
  templateUrl: './setmyself.page.html',
  styleUrls: ['./setmyself.page.scss'],
})
export class SetmyselfPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  back() {
    this.nav.back();
  }
}
