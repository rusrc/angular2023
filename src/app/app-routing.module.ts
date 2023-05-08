import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { someRouteGuard } from './guards/home-page/some-route.guard';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'about', component: AboutPageComponent, canActivate: [someRouteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
