import { Injectable } from '@angular/core';
import {CardModel} from "../interface/CardModel";
import {RoutingClass} from "../Classes/RoutingClass";

@Injectable()
export class CartItemService {

  public toDoList:Array<CardModel>=[];
  public doingList:Array<CardModel>=[];
  public doneList:Array<CardModel>=[];
  public itemModel:CardModel={taskName:"",state:"",dateTime:new Date(),timeLeft:"",id:-1};
  constructor() { }

  addTask(card:CardModel):Array<CardModel>{
      for (let item of this.toDoList){
        if(card.id===item.id){
          this.itemModel=item;
        }
      }
      if(this.itemModel.id!==-1){
        return this.toDoList;
      }else {
        card.id=new Date().getTime();
        this.toDoList.push(card);
        return this.toDoList;

    }
  }
  editeTask(card:CardModel):Array<CardModel>{
    for(let item of this.toDoList) {
      if (card.id === item.id) {
        const index = this.toDoList.findIndex(objCard => card.id === objCard.id);
        this.toDoList[index] = card;
      }
    }
    return this.toDoList;
  }
  deleteTask(card:CardModel):Array<CardModel>{
    this.toDoList.splice(this.toDoList.indexOf(card), 1);
    return this.toDoList;
  }
  changingStateTask(card:CardModel):void{
    if(card.state==="doing"){
      RoutingClass.doingList.push(card);
    }else{
      RoutingClass.doneList.push(card);
    }

  }
}
