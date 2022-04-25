import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddExcuseComponent } from './public/add-excuse/add-excuse.component';
import { DetailExcuseComponent } from './public/detail-excuse/detail-excuse.component';
import { ShowExcuseChildComponent } from './public/show-excuse/show-excuse-child/show-excuse-child.component';
import { ShowExcuseComponent } from './public/show-excuse/show-excuse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    AddExcuseComponent,
    DetailExcuseComponent,
    ShowExcuseComponent,
    ShowExcuseChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
