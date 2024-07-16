import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConnectionComponent } from './add-connection/add-connection.component';
import { AdminComponent } from './admin/admin.component';
import { AuthentificationGuard } from './guards/authentification.guard';
import { ListeComponent } from './liste/liste.component';
import { LoginComponent } from './login/login.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:LoginComponent},
  {path:"admin",component:AdminComponent,canActivate:[AuthentificationGuard] ,
  children:[
    {path:"produits",component:ProduitsComponent},
    {path:"add-connection",component:AddConnectionComponent},
    {path:"liste",component:ListeComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
