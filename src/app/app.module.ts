import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Add these
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { UiModule } from './ui/ui.module';
import { HomeComponent } from './home/home.component';
import { BeersComponent } from './components/beers/beers.component';
import { HttpClientModule } from '@angular/common/http';
library.add(fas);

@NgModule({
  declarations: [AppComponent, HomeComponent, BeersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
