import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { PlayerDetailModule } from '@components/player-detail/player-detail.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, PlayerDetailModule],
})
export class NavbarModule {}
