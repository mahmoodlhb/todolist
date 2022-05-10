import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ToDoParentModule} from "../to-do-parent/to-do-parent.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ToDoParentModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
