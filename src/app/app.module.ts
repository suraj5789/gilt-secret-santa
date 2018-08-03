import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing";
import { SantaListComponent,
HeaderComponent,
ValidateEmailComponent,
HomeComponent  } from './components';
import { DataService, UserListResolver } from './services';

/**
 * Main Module for the application
 */
@NgModule({
  declarations: [
    AppComponent,
    SantaListComponent,
    HeaderComponent,    
    ValidateEmailComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [
    DataService,
    UserListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
