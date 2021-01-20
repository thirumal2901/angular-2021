import { Component, VERSION, ViewChild } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("todo") inputName; // accessing the reference element
  name = "Angular " + VERSION.major;

  placeholder = "TODO";

  todoArray = [];

  addTodo(value) {
    this.todoArray.push(value);
    console.log(this.todoArray);
    this.inputName.nativeElement.value = " ";
    //this.inputName.nativeElement.value.placeholder = "TODO";
  }

  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }
}
