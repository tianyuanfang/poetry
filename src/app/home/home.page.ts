import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Params } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  page;

  constructor(public nav:NavController){
    
  }
  

}
