import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ' ',
    component: AdminComponent,
  },
  {
    path: 'create-player',
    loadChildren: () =>
      import('@routes/create-player/create-player.module').then(
        (mod) => mod.CreatePlayerModule
      ),
  },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
