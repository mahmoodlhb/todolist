import {Component} from '@angular/core';
import {CardModel} from "../to-do-parent/interface/CardModel";
import {CartItemService} from "../to-do-parent/services/cart-item.service";
import {RoutingClass} from "../to-do-parent/Classes/RoutingClass";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CartItemService]
})
export class AppComponent {
  title = 'my-todo-list';
  itemsList: Array<CardModel> = [];
  itemsListDoing: Array<CardModel> = [];
  itemsListDone: Array<CardModel> = [];
  eventText: string = "";
  newTask: CardModel = {taskName: "", state: "", dateTime: new Date(), timeLeft: "", id: -1};


  constructor(public cartItem: CartItemService) {
  }


  public addToDoList(): void {
    if (this.newTask == null) {
      console.log("please insert the value!");
    } else {
      this.newTask.state = "todo"
      this.newTask.dateTime = new Date();
      this.itemsList = this.cartItem.addTask(this.newTask);
      this.newTask = {taskName: "", state: "", dateTime: new Date(), timeLeft: "", id: -1};
    }
  }

  public deleteTodoList(deleteCardModel: CardModel): void {
    this.itemsList = this.cartItem.deleteTask(deleteCardModel);
  }

  public deleteDoingList(deleteCardModel: CardModel): void {
    RoutingClass.doingList.splice(RoutingClass.doingList.indexOf(deleteCardModel, 1));
  }
  editeTask(editeCardModel: CardModel): void {
    this.newTask.taskName = editeCardModel.taskName;
    this.newTask.dateTime = editeCardModel.dateTime;
    this.newTask.state = editeCardModel.state;
    this.newTask.id = editeCardModel.id;
    this.newTask.timeLeft = editeCardModel.timeLeft;
    this.itemsList = this.cartItem.editeTask(this.newTask);
  }
changToDone(cardItemDone:CardModel):void{
  this.itemsListDoing.splice(this.itemsListDoing.indexOf(cardItemDone), 1);
  this.cartItem.changingStateTask(cardItemDone);
  this.itemsListDone = RoutingClass.doneList;
}
  changToDoing(cardItemDoing: CardModel): void {
    this.itemsList.splice(this.itemsList.indexOf(cardItemDoing), 1);
    if (cardItemDoing.state === "doing") {
      this.cartItem.changingStateTask(cardItemDoing);
      this.itemsListDoing = RoutingClass.doingList;
    }
  }
}
