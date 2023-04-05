import { Component, OnInit } from '@angular/core';
import { PlayerService } from '@services/player.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.scss'],
})
export class ListPlayersComponent implements OnInit {
  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this._onGetPlayers();
  }

  private _onGetPlayers(): void {
    this.playerService.getList().subscribe((res: any) => {
      console.log(res);
    });
  }
}
