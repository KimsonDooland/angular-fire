import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { FirebaseListObservable} from 'angularfire2/database-deprecated';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs';


@Injectable()
export class ChartService {

  constructor(public db: AngularFireDatabase) { }


  getData(dataset: string) {

    return this.db.list(dataset).snapshotChanges();
  }

}