import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { HeaderComponent } from './header/header.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewproductsComponent,
    HeaderComponent,
    AddproductsComponent,
    UpdateproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
