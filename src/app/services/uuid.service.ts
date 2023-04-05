import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UuidService {
  constructor() {}

  public generate(): string {
    const rs = `${this._genS4()}${this._genS4()}-${this._genS4()}-${this._genS4()}-${this._genS4()}-${this._genS4()}${this._genS4()}${this._genS4()}`;
    return rs;
  }

  private _genS4(): string {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
}
