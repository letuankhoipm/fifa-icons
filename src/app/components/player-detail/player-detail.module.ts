import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDetailComponent } from './player-detail.component';
import { NgbNavModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PlayerDetailComponent],
  imports: [CommonModule, NgbNavModule, NgbRatingModule],
})
export class PlayerDetailModule {}
