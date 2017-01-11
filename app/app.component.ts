import { Component, OnInit } from "@angular/core";
import { ActivityService } from "./app.service";
import { Observable } from 'rxjs/Observable';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    public activities$: Observable<any>;

    constructor(private activityService: ActivityService) { }

    ngOnInit() {
        this.activities$ = this.activityService.getActivities();
    }

}    