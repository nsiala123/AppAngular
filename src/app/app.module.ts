import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { AddConnectionComponent } from './add-connection/add-connection.component';
import { ProduitsComponent } from './produits/produits.component';
import { BoutonComponent } from './bouton/bouton.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    AddConnectionComponent,
    ProduitsComponent,
    BoutonComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule,


  ],
  providers: [
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule],

  bootstrap: [AppComponent]
})
export class AppModule { }
