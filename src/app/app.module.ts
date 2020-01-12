import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import{ FormsModule} from '@angular/forms';

import{ReactiveFormsModule} from '@angular/forms'

import { CreateadminComponent } from './createadmin/createadmin.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateadminComponent
  ],
  imports: [
    AppRoutingModule,


    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
