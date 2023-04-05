import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import {
  uploadBytes,
  ref,
  getStorage,
  getDownloadURL,
  UploadResult,
  deleteObject,
} from '@firebase/storage';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  public store = getStorage(initializeApp(environment.firebaseConfig));
  constructor() {}

  public upload(file: any): Promise<UploadResult> {
    const filePath = `images/${file.name}`; // image will be save in images folder.
    const storageRef = ref(this.store, filePath);
    const upload = uploadBytes(storageRef, file);
    return upload;
  }

  public async download(filePath: string): Promise<string> {
    const storeRef = ref(this.store, filePath);
    return getDownloadURL(storeRef);
  }

  public delete(filePath: string): Promise<any> {
    const storageRef = ref(this.store, filePath);
    return deleteObject(storageRef);
  }
}
