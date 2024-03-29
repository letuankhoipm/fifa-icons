import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { FooterModule } from '@components/footer/footer.module';
import { NavbarModule } from '@components/navbar/navbar.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ' ',
    component: LandingComponent,
  },
  {
    path: 'list-players',
    loadChildren: () =>
      import('@routes/list-players/list-players.module').then(
        (mod) => mod.ListPlayersModule
      ),
  },
];

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule,
    RouterModule.forChild(routes),
  ],
})
export class LandingModule {}
