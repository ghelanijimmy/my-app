import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {EntryListComponent, EntryComponent, EntryService} from './entries';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    EntryListComponent
  ],
  providers:[
    EntryService
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class appModule {}
