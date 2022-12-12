import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '@layouts/admin/admin.component';
import { LandingComponent } from '@layouts/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  // {
  //   path: 'not-found',
  //   loadChildren: () =>
  //     import('@layouts/not-found/not-found.module').then(
  //       (mod) => mod.NotFoundModule
  //     ),
  // },

  {
    path: 'landing',
    component: LandingComponent,
    loadChildren: () =>
      import('@layouts/landing/landing.module').then(
        (mod) => mod.LandingModule
      ),
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () =>
      import('@layouts/admin/admin.module').then((mod) => mod.AdminModule),
  },
  // { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
