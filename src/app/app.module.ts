import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, FormsModule, MatInputModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [MatInputModule]
})
export class AppModule {}
