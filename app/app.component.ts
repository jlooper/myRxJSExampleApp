import { Component } from "@angular/core";
import { ActivityService } from "./app.service";
import {Observable} from 'rxjs/Observable';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent {   

    public activities$: Observable<any>;
    data: any;
    error: any;

    constructor(private activityService: ActivityService) { 
        this.activityService.getActivities().subscribe(
        data => {
            this.activities$ = data;
        },
        error => {
            this.error = error;
        });

        
    }

    

   
}    