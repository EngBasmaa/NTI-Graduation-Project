import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: "all-products", component: AllProductsComponent },
  { path: "product-details", component: ProductsDetailsComponent },
  { path: "dashboard", component: DashboardComponent },

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },

  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: "**", component: HomeComponent, pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
