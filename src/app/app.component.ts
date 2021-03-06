import { Component, VERSION, ViewChild } from "@angular/core";
import { MatInputModule } from "@angular/material/input";

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
    if (value != "") {
      this.todoArray.push(value);
      console.log(this.todoArray);
      this.inputName.nativeElement.value = null;
      //this.inputName.nativeElement.value.placeholder = "TODO";
    }
  }

  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }
}
