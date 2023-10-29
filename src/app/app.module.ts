import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy.component';
import { GroupBoxModule } from './groupbox/groupbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
  ],
  imports: [
    BrowserModule,
    GroupBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
