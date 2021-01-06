import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  todoArray = [];

  addTodo(value) {
    this.todoArray.push(value);
    console.log(this.todoArray);
  }

  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if ((todo = this.todoArray[i])) {
        this.todoArray.splice(i,1);
      }
    }
  }
}
