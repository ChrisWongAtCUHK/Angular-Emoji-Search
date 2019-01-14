import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmojiHeaderComponent } from './emoji-header/emoji-header.component';
import { EmojiResultsRowComponent } from './emoji-results-row/emoji-results-row.component';

@NgModule({
  declarations: [
    AppComponent,
    EmojiHeaderComponent,
    EmojiResultsRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
