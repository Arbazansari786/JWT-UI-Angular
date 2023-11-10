import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './_auth/auth.guard';
import { ForUserComponent } from './for-user/for-user.component';
import { ForAdminComponent } from './for-admin/for-admin.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ShowAllProductsComponent } from './show-all-products/show-all-products.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminComponent,canActivate:[authGuard],data:{roles:['admin']}},
  {path:'user',component:UserComponent,canActivate:[authGuard],data:{roles:['user']}},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'login',component:LoginComponent},
  {path:'foruser',component:ForUserComponent,canActivate:[authGuard],data:{roles:['user']}},
  {path:'foradmin',component:ForAdminComponent,canActivate:[authGuard],data:{roles:['admin']}},
  {path:'addNewProduct',component:AddNewProductComponent,canActivate:[authGuard],data:{roles:['admin']}},
  {path:'ShowAllProducts', component:ShowAllProductsComponent,canActivate:[authGuard],data:{roles:['admin']}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
