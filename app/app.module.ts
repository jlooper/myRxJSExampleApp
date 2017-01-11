import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { ActivityService } from "./app.service";

import { AppComponent } from "./app.component";

@NgModule({
    providers: [
        ActivityService
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
