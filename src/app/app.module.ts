import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmojiHeaderComponent } from './emoji-header/emoji-header.component';
import { EmojiResultRowComponent } from './emoji-result-row/emoji-result-row.component';

@NgModule({
  declarations: [
    AppComponent,
    EmojiHeaderComponent,
    EmojiResultRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
