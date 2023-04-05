import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadResult } from '@firebase/storage';
import { UuidService } from '@services/uuid.service';
import { FileService } from '@services/file.service';
import { ToastrService } from 'ngx-toastr';
import { PlayerService } from '@services/player.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss'],
})
export class CreatePlayerComponent implements OnInit {
  public playerForm = new FormGroup({
    uuid: new FormControl('', Validators.required),
    name: new FormControl(null, Validators.required),
    imgSrc: new FormControl('', Validators.required),
    position: new FormControl(null, Validators.required),
    overall: new FormControl(0, Validators.required),
    flag: new FormControl('', Validators.required),
    nationality: new FormControl(null, Validators.required),
    height: new FormControl(null, Validators.required),
    weight: new FormControl(null, Validators.required),
    rightFoot: new FormControl(null, Validators.required),
    leftFoot: new FormControl(null, Validators.required),
    birthday: new FormControl(null, Validators.required),
    reputation: new FormControl(null, Validators.required),
    skills: new FormControl(null, Validators.required),
    traits: new FormControl(null, Validators.required),
    briefInfo: new FormControl(null, Validators.required),
    honours: new FormControl(null, Validators.required),
    shirtNumber: new FormControl(null, Validators.required),
    // ====================================================
    acceleration: new FormControl(null, Validators.required),
    sprintSpeed: new FormControl(null, Validators.required),
    dribbling: new FormControl(null, Validators.required),
    ballControl: new FormControl(null, Validators.required),
    shortPassing: new FormControl(null, Validators.required),
    finishing: new FormControl(null, Validators.required),
    shotPower: new FormControl(null, Validators.required),
    heading: new FormControl(null, Validators.required),
    longShots: new FormControl(null, Validators.required),
    positioning: new FormControl(null, Validators.required),
    vision: new FormControl(null, Validators.required),
    reactions: new FormControl(null, Validators.required),
    volleys: new FormControl(null, Validators.required),
    penalties: new FormControl(null, Validators.required),
    crossing: new FormControl(null, Validators.required),
    freeKick: new FormControl(null, Validators.required),
    curve: new FormControl(null, Validators.required),
    agility: new FormControl(null, Validators.required),
    balance: new FormControl(null, Validators.required),
    marking: new FormControl(null, Validators.required),
    standingTackle: new FormControl(null, Validators.required),
    interceptions: new FormControl(null, Validators.required),
    slidingTackle: new FormControl(null, Validators.required),
    strength: new FormControl(null, Validators.required),
    stamina: new FormControl(null, Validators.required),
    aggression: new FormControl(null, Validators.required),
    jumping: new FormControl(null, Validators.required),
    composure: new FormControl(null, Validators.required),
    gkDiving: new FormControl(null, Validators.required),
    gkHandling: new FormControl(null, Validators.required),
    gkKicking: new FormControl(null, Validators.required),
    gkReflexes: new FormControl(null, Validators.required),
    gkPositioning: new FormControl(null, Validators.required),
  });

  get imgSrc(): FormControl {
    return this.playerForm.controls['imgSrc'];
  }

  constructor(
    private uuidService: UuidService,
    private plyerService: PlayerService,
    private toastr: ToastrService,
    private fileService: FileService
  ) {}

  ngOnInit(): void {}

  public onSave(): void {
    this.playerForm.patchValue({
      uuid: this.uuidService.generate(),
    });
    this.plyerService.create(this.playerForm.value).subscribe(() => {
      this.toastr.success('Notification', 'Create successfully!');
    });
  }

  public onProcessingFile(event: any): void {
    const { files } = event.target;
    this.fileService.upload(files[0]).then(async (res: UploadResult) => {
      const { fullPath } = res.metadata;
      const download = await this.fileService.download(fullPath);
      if (!download) return;
      this.playerForm.patchValue({ imgSrc: download });
      this.toastr.success('Notification', 'Upload file successfully!');
    });
  }

  public onCancel(): void {}
}
