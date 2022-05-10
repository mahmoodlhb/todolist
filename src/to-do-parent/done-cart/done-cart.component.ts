import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CardModel} from "../interface/CardModel";
import {RoutingClass} from "../Classes/RoutingClass";

@Component({
  selector: 'todo-done-cart',
  templateUrl: './done-cart.component.html',
  styleUrls: ['./done-cart.component.css']
})
export class DoneCartComponent implements OnInit,OnChanges {
  @Input() cartTaskItemDone!:CardModel;
  doneCardList:Array<CardModel>=[];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(RoutingClass.doneList!==null&&undefined){
      for(let item of RoutingClass.doneList){
        this.cartTaskItemDone.id=item.id;
        this.cartTaskItemDone.taskName=item.taskName;
        this.cartTaskItemDone.state=item.state;
        this.cartTaskItemDone.dateTime=item.dateTime;
        this.cartTaskItemDone.timeLeft=item.timeLeft;
      }

    }


  }

}
