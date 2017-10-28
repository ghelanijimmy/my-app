import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {EntryListComponent, EntryComponent} from './entries';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    EntryListComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class appModule {}
