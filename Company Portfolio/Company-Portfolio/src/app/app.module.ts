import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule, SharedModule,
    ProductsModule, FormsModule, ReactiveFormsModule, AuthModule, RouterModule
    // ReactiveFormsModule, 
    // RouterModule.forRoot([])
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
