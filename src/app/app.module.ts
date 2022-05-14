import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './categories/head/head.component';
import { FaceComponent } from './categories/face/face.component';
import { FaceDetailsComponent } from './face-details/face-details.component';
import { FaceCartComponent } from './categories/face-cart/face-cart.component';
import { BodyComponent } from './categories/body/body.component';
import { BodyDetailsComponent } from './body-details/body-details.component';
import { HairComponent } from './categories/hair/hair.component';
import { HairDetailsComponent } from './hair-details/hair-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent,
    HeadComponent,
    FaceComponent,
    FaceDetailsComponent,
    FaceCartComponent,
    BodyComponent,
    BodyDetailsComponent,
    HairComponent,
    HairDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    HttpClientModule,
    BrowserAnimationsModule ,
    MatBadgeModule ,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
