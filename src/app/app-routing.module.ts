import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { AddItemComponent } from './component/add-item/add-item.component';
import { DetailItemComponent } from './component/detail-item/detail-item.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  // {path: 'login', component: AuthComponent},
  // {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
  {path: 'create', component: AddItemComponent},
  {path: 'home', component: HomeComponent},
  {path: 'detail-item/:id', component: DetailItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
