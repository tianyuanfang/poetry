import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SearchdetailPage } from './searchdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // SearchdetailPageRoutingModule,
    RouterModule.forChild([{ path: '', component: SearchdetailPage }])
  ],
  declarations: [SearchdetailPage]
})
export class SearchdetailPageModule {}
