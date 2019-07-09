import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardViewComponent } from './dashboard/dashboard-view/dashboard-view.component';
import { AboutComponent } from './about/about.component';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { RegisterComponent } from './home/register/register.component';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  {
    path: 'dashboard',
    component: DashboardViewComponent,
    // canActivate: [AuthGuard]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
