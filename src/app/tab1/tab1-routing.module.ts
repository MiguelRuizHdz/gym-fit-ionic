import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'espalda',
    loadChildren: () => import('./espalda/espalda.module').then( m => m.EspaldaPageModule)
  },
  {
    path: 'brazo',
    loadChildren: () => import('./brazo/brazo.module').then( m => m.BrazoPageModule)
  },
  {
    path: 'abdomen',
    loadChildren: () => import('./abdomen/abdomen.module').then( m => m.AbdomenPageModule)
  },
  {
    path: 'pierna',
    loadChildren: () => import('./pierna/pierna.module').then( m => m.PiernaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
