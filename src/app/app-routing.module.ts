import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

imports: [
  FormsModule,
  BrowserModule,
  AppRoutingModule,

],

	providers
}: [],
bootstrap: [AppComponent]
})
export class AppModule { }
export { AppRoutingModule };

