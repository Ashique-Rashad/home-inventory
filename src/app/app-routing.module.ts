import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AuthGuard } from './auth/services/auth.guard';
import { NoAuthGuard } from './auth/services/no-auth.guard';

const appRouts: Routes = [
  {
    path: '',
    redirectTo: 'inventory',
    pathMatch: 'full'
  },
  {
    path: 'inventory',
    canActivate: [AuthGuard],
    loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)
  },
  { path: 'signin', 
    component: SigninComponent,
    canActivate: [NoAuthGuard]
   },
  { path: '**', redirectTo: '/signin' },
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRouts)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }