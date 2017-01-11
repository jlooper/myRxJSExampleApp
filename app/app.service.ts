import {Injectable, Inject, NgZone} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class ActivityService {

constructor (
    private http: Http
    ){}

private handleError(){
    console.log("error");
}
 public getActivities(): Observable<any> {
    return this.http.get('https://api.github.com/users/jlooper/events')
                  .map(res=>res.json())
                  //.catch(this.handleError);
 }
}