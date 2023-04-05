import {
  Firestore,
  collectionData,
  collection,
  docData,
  doc,
  deleteDoc,
  setDoc,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

export class CrudService {
  protected collection = '';

  constructor(collection: string, protected firestore: Firestore) {
    this.collection = collection;
  }

  public getList(): Observable<any[]> {
    const refCollection = collection(this.firestore, this.collection);
    return collectionData(refCollection) as Observable<any[]>;
  }

  public getById(uuid: string): Observable<any> {
    const refDoc = doc(this.firestore, `${this.collection}/${uuid}`);
    return docData(refDoc, { idField: 'id' }) as Observable<any>;
  }

  public create(payload: any): Observable<any> {
    const refCollection = collection(this.firestore, this.collection);
    return from(setDoc(doc(refCollection, payload.uuid), { ...payload }));
  }

  public updateById(id: string, payload: any): Observable<any> {
    const refDoc = doc(this.firestore, `${this.collection}/${id}`);
    return from(setDoc(refDoc, payload));
  }

  public deleteById(id: string): Observable<any> {
    const refDoc = doc(this.firestore, `${this.collection}/${id}`);
    return from(deleteDoc(refDoc));
  }
}
