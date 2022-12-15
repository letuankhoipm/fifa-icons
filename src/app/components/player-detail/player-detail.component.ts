import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PlayerDetailComponent implements OnInit {
  public active = 1;
  public activeAttribute = 1;
  constructor() {}

  ngOnInit(): void {}
}
