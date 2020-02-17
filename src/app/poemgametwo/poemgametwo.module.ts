import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PoemgametwoPage } from './poemgametwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: PoemgametwoPage }])
  ],
  declarations: [PoemgametwoPage]
})
export class PoemgametwoPageModule {}
