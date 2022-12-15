import { Component, OnInit } from '@angular/core';
import { PlayerDetailComponent } from '@components/player-detail/player-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  public onClick(): void {
    this.modalService.open(PlayerDetailComponent, {
      centered: true,
      size: 'xl',
    });
  }
}
