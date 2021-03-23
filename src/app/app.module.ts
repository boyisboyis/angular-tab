import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleDyTabComponent } from './example-dy-tab/example-dy-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FirstTabComponent } from './tab-content/first-tab-content.component';
import { SecondTabComponent } from './tab-content/second-tab-content.component';
@NgModule({
  declarations: [
    AppComponent,
    ExampleDyTabComponent,
    FirstTabComponent,
    SecondTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
