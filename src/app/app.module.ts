import { BandsService } from './bands/bands.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BandsComponent } from './bands/bands.component';
import { BandComponent } from './bands/band/band.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BandsComponent,
    BandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
