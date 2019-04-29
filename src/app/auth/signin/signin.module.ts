import { NgModule } from '@angular/core';

import { SigninComponent } from './signin.component';
import { ThemeModule } from '../../@theme/theme.module';
@NgModule({
  declarations: [SigninComponent],
  imports: [
    ThemeModule
    
  ],
  entryComponents:[
    SigninComponent
  ]
})
export class SigninModule { }
