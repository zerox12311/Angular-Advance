import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NormalSubComponent } from './normal-sub/normal-sub.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'sub1', pathMatch: 'full' },
      { path: 'sub1', component: NormalSubComponent }
    ]
  },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'post', loadChildren: './post/post.module#PostModule' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
