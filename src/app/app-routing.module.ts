import { BandDetailComponent } from './band-detail/band-detail.component';
import { AboutComponent } from './about/about.component';
import { BandsComponent } from './bands/bands.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bands', component: BandsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'bands/:idBand', component: BandDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
