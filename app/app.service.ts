import { Injectable, Inject, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivityService {

    constructor(
        private http: Http
    ) {}

    public getActivities(): Observable<any> {
        return this.http.get('https://api.github.com/users/jlooper/events')
            .map(res => res.json())
    }
}