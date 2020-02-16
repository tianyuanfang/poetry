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
  },
  {
    path: 'hometotal',
    loadChildren: () => import('./hometotal/hometotal.module').then( m => m.HometotalPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'searchdetail',
    loadChildren: () => import('./searchdetail/searchdetail.module').then( m => m.SearchdetailPageModule)
  },
  {
    path: 'set',
    loadChildren: () => import('./set/set.module').then( m => m.SetPageModule)
  },
  {
    path: 'myself',
    loadChildren: () => import('./myself/myself.module').then( m => m.MyselfPageModule)
  },
  {
    path: 'setmyself',
    loadChildren: () => import('./setmyself/setmyself.module').then( m => m.SetmyselfPageModule)
  },
  {
    path: 'mylike',
    loadChildren: () => import('./mylike/mylike.module').then( m => m.MylikePageModule)
  },
  {
    path: 'mycollect',
    loadChildren: () => import('./mycollect/mycollect.module').then( m => m.MycollectPageModule)
  },
  {
    path: 'myfollow',
    loadChildren: () => import('./myfollow/myfollow.module').then( m => m.MyfollowPageModule)
  },
  {
    path: 'mycreate',
    loadChildren: () => import('./mycreate/mycreate.module').then( m => m.MycreatePageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'recommentpoem',
    loadChildren: () => import('./recommentpoem/recommentpoem.module').then( m => m.RecommentpoemPageModule)
  },
  {
    path: 'poemgame',
    loadChildren: () => import('./poemgame/poemgame.module').then( m => m.PoemgamePageModule)
  },
  {
    path: 'poemgametwo',
    loadChildren: () => import('./poemgametwo/poemgametwo.module').then( m => m.PoemgametwoPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
