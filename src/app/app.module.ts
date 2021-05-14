import { environment } from './../environments/environment.prod';
import { ImagenesComponent } from './Components/imagenes/imagenes.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import firebase from "firebase/app";
import{AngularFireStorageModule}from'@angular/fire/storage';
import { HttpClientModule } from "@angular/common/http";
firebase.initializeApp(environment.firebase);



@NgModule({
  declarations: [
    AppComponent,
    ImagenesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
