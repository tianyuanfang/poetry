import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController ,NavParams} from '@ionic/angular';

@Component({
  selector: 'app-hometotal',
  templateUrl: './hometotal.page.html',
  styleUrls: ['./hometotal.page.scss'],
})
export class HometotalPage implements OnInit {

  selectedTheme: String;
  constructor(public nav: NavController,) {
     
   }

  ngOnInit() {
  }
  back() {
    this.nav.back();
  }

 
}
