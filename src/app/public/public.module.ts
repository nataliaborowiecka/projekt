import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [],
  providers: [],
})
export class PublicModule { }
