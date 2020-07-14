import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { SmartRawComponent } from './smart-table/smart-raw/smart-raw.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartTableComponent,
    SmartRawComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
