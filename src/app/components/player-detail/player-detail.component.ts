import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayerService } from '@services/player.service';
import { PlayerDetail } from 'app/interfaces/player-detail.type';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PlayerDetailComponent implements OnInit {
  public active = 1;
  public activeAttribute = 1;

  public playerDetail: PlayerDetail | undefined = {
    skills: 0,
  };

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this._onGetDetail();
  }

  private _onGetDetail(): void {
    this.playerService
      .getById('d0d7eccd-3a50-2e1c-2c13-0d3080fd4ed0')
      .subscribe((res: any) => {
        this.playerDetail = res;
      });
  }
}
