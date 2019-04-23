import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, PublicRoutingModule, MaterialModule],
  exports: [],
  providers: []
})
export class PublicModule {}
