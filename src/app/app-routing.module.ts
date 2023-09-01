import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { RegisterUserComponent } from './components/users/register-user/register-user.component';
import { LoginUserComponent } from './components/users/login-user/login-user.component';
import { AdminComponent } from './components/admin/admin.component';
import { ResetPasswordComponent } from './components/users/reset-password/reset-password.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  // {path:'', redirectTo:"users/login",pathMatch:'full'},
  {path:'',component:HomePageComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'footer', component:FooterComponent},
  {path:'users',component:UsersComponent},
  {path:'users/register', component:RegisterUserComponent},
  {path:'users/login', component:LoginUserComponent},
  {path:'users/resetPassword',component:ResetPasswordComponent},
  {path:'admin', component:AdminComponent},
  {path:'admin/login', component:AdminLoginComponent},
  {path:'products', component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
