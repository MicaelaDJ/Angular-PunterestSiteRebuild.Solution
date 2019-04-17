import { Injectable } from '@angular/core';
import { Pun } from '../pun.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PunService {
  puns: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.puns = database.list('puns');
  }
  

}
