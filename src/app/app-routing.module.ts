import { HairDetailsComponent } from './hair-details/hair-details.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HairComponent } from './categories/hair/hair.component';
import { FaceCartComponent } from './categories/face-cart/face-cart.component';
import { FaceDetailsComponent } from './face-details/face-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { FaceComponent } from './categories/face/face.component';
import { HeadComponent } from './categories/head/head.component';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './categories/body/body.component';
import { BodyDetailsComponent } from './body-details/body-details.component';

const routes: Routes = [
  {path:'categories',component:CategoriesComponent},
  {path:'categories',component:CategoriesComponent,canActivate:[AuthGuard]},
  {path:'header',component:HeadComponent},
  {path:'face',component:FaceComponent},
  {path:'face/:id',component:FaceDetailsComponent},
  {path:'face-cart',component:FaceCartComponent},
  {path:'body',component:BodyComponent},
  {path:'body/:id',component:BodyDetailsComponent},
  {path:'hair',component:HairComponent},
  {path:'hair/:id',component:HairDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
