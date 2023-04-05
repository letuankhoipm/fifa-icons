import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePlayerComponent } from './create-player.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CreatePlayerComponent,
  },
];

@NgModule({
  declarations: [CreatePlayerComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class CreatePlayerModule {}
