import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          },
          {
            path: 'hometail',
            loadChildren: () =>
              import('../hometail/hometail.module').then(m => m.HometailPageModule)
          }
        ]
      },
      {
        path: 'poem',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../poem/poem.module').then(m => m.PoemPageModule)
          }
        ]
      },
      {
        path: 'answer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../answer/answer.module').then(m => m.AnswerPageModule)
          }
        ]
      },
      {
        path: 'my',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../my/my.module').then(m => m.MyPageModule)
          }
        ]
      }
    ]
  }, 
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
