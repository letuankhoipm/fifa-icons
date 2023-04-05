import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { CrudService } from '@services/crud.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerService extends CrudService {
  constructor(protected override firestore: Firestore) {
    super('player', firestore);
  }
}
