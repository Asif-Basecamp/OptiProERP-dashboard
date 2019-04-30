import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { TreeModule } from 'angular-tree-component';


@NgModule({
  imports: [
    ThemeModule,
    TreeModule.forRoot()  
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
