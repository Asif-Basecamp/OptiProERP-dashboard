import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [{
  path: '',
  component: SigninComponent,
  children: [
    {
      path: 'signin',
      component: SigninComponent,
    },
    {
      path: '',
      redirectTo: 'signin',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }


