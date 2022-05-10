import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardModel} from "../interface/CardModel";
import {CartItemService} from "../services/cart-item.service";

@Component({
  selector: 'todo-to-do-cart',
  templateUrl: './to-do-cart.component.html',
  styleUrls: ['./to-do-cart.component.css'],
  providers:[CartItemService]
})
export class ToDoCartComponent implements OnInit {
  @Input() cartTaskItem!:CardModel;
  @Output() editeEvent=new EventEmitter<CardModel>();
  @Output() deleteEvent=new EventEmitter<CardModel>();
  @Output() isChangeEvent=new EventEmitter<CardModel>();
  constructor(public cartItemInput :CartItemService) { }

  ngOnInit(): void {
  }


  public deleteTask(cartTaskItem: CardModel):void {
    this.deleteEvent.emit(cartTaskItem);
  }
  public editeTask(cartTaskItem: CardModel):void{
    this.editeEvent.emit(cartTaskItem)  }

  changeStatus(cartTaskItem: CardModel) {
    if(cartTaskItem.state==="todo")
    {
      cartTaskItem.state="doing";
      this.isChangeEvent.emit(cartTaskItem);
    }
  }

}
