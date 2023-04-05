import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlayersComponent } from './list-players.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ListPlayersComponent }];

@NgModule({
  declarations: [ListPlayersComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ListPlayersModule {}
