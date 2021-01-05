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
}
