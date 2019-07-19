import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoreLoginComponent} from './modules/core/pages/core-login/core-login.component';

const routes: Routes = [
  {
    path: '',
    component: CoreLoginComponent,
  },
  {
    path: 'client',
    loadChildren: 'src/app/modules/client/client.module#ClientModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
        routes,
        {
          useHash: true
        }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
