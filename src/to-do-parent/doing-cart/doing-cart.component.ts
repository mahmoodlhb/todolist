import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CardModel} from "../interface/CardModel";
import {Observable} from "rxjs";
import {RoutingClass} from "../Classes/RoutingClass";

@Component({
  selector: 'todo-doing-cart',
  templateUrl: './doing-cart.component.html',
  styleUrls: ['./doing-cart.component.css']
})
export class DoingCartComponent implements OnInit,OnChanges {
  @Input() cartTaskItemDoing!:CardModel;
  @Output() deleteDoingEvent=new EventEmitter<CardModel>();
  @Output() isChangeDoingEvent=new EventEmitter<CardModel>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (RoutingClass.doingList !== null && undefined) {
      for (let item of RoutingClass.doingList) {
        this.cartTaskItemDoing.id = item.id;
        this.cartTaskItemDoing.taskName = item.taskName;
        this.cartTaskItemDoing.state = item.state;
        this.cartTaskItemDoing.dateTime = item.dateTime;
        this.cartTaskItemDoing.timeLeft = item.timeLeft;
      }
    }
  }
  public deleteTaskDoing(cartTaskItem: CardModel):void {
    this.deleteDoingEvent.emit(cartTaskItem);
  }
  changeStatus(cartTaskItem: CardModel) {
    if(cartTaskItem.state==="doing")
    {
      cartTaskItem.state="done";
      this.isChangeDoingEvent.emit(cartTaskItem);
    }
  }

}
