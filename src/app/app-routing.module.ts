import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/components/errors/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // Implementing lazy loading by following format
  {path:'account', loadChildren: () => import('./account/account.module').then(module => module.AccountModule)},
  // Implementing lazy loading for man module by following format
  {path:'man', loadChildren: () => import('./man/man.module').then(module => module.ManModule)},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
