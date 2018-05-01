import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './hello/hello.component';


const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
    children: [
      {
        path: '', // 这是默认进入operation这个子路由的意思
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: HelloComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
