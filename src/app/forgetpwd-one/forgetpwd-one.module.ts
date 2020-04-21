import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ForgetpwdOnePage } from './forgetpwd-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ForgetpwdOnePage }])
  ],
  declarations: [ForgetpwdOnePage]
})
export class ForgetpwdOnePageModule {}
