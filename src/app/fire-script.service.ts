import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { FirebaseListObservable} from 'angularfire2/database-deprecated';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs';


@Injectable()
export class FireScriptService {

  constructor(public db: AngularFireDatabase) { }


  getData(dataset: string) {
    return this.db.list(dataset).valueChanges();
  }

  //used for realtime data upadtes

  UpdateRanking(key, newData) {

    return this.db.object(`jimjacksjimontest/${key}`).update(newData);
    
  }
}
