import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recommentpoem',
  templateUrl: './recommentpoem.page.html',
  styleUrls: ['./recommentpoem.page.scss'],
})
export class RecommentpoemPage implements OnInit {

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
