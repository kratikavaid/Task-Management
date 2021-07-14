import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    CreateDialogComponent
  ],
  imports: [
    BrowserModule,FormsModule, MatCardModule, DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
