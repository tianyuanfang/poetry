import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'my',
    loadChildren: () => import('./my/my.module').then( m => m.MyPageModule)
  },
  {
    path: 'answer',
    loadChildren: () => import('./answer/answer.module').then( m => m.AnswerPageModule)
  },
  {
    path: 'poem',
    loadChildren: () => import('./poem/poem.module').then( m => m.PoemPageModule)
  },
  {
    path: 'hometail',
    loadChildren: () => import('./hometail/hometail.module').then( m => m.HometailPageModule)
  },  {
    path: 'hometotal',
    loadChildren: () => import('./hometotal/hometotal.module').then( m => m.HometotalPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
