import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
],


  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [

],
  bootstrap: [AppComponent]
})
export class AppModule { }

