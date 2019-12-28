import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HometailPage } from './hometail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // HometailPageRoutingModule
    RouterModule.forChild([{ path: '', component: HometailPage }])
  ],
  declarations: [HometailPage]
})
export class HometailPageModule {}
