import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToDoCartComponent} from "./to-do-cart/to-do-cart.component";
import {DoingCartComponent} from "./doing-cart/doing-cart.component";
import {DoneCartComponent} from "./done-cart/done-cart.component";




@NgModule({
  declarations: [
    ToDoCartComponent,
    DoingCartComponent,
    DoneCartComponent
  ],
    exports: [
        ToDoCartComponent,
        DoneCartComponent,
        DoingCartComponent
    ],
  imports: [
    CommonModule,
  ]
})
export class ToDoParentModule { }
