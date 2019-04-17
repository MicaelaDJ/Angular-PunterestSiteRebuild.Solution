import { Injectable } from '@angular/core';
import { Pun } from './pun.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PunService {
  puns: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.puns = database.list('puns');
  }
  getPuns() {
    return this.puns;
  }
  addPun(newPun: Pun) {
    this.puns.push(newPun);
  }

  getPunById(punId: number){
    return this.database.object('puns/' + punId);
  }

}
