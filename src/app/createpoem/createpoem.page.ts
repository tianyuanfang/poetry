import { Component, OnInit } from '@angular/core';
import { NavController ,NavParams} from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-createpoem',
  templateUrl: './createpoem.page.html',
  styleUrls: ['./createpoem.page.scss'],
})
export class CreatepoemPage implements OnInit {

  constructor(public nav: NavController,public http:HttpClient) { }

  ngOnInit() {
  }

  back() {
    this.nav.back();
  }

}
