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
FooterComponent,
ValidateEmailComponent  } from './components';
import { DataService } from './services/data.service';



@NgModule({
  declarations: [
    AppComponent,
    SantaListComponent,
    HeaderComponent,
    FooterComponent,
    ValidateEmailComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
