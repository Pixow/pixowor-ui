import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PixButtonModule } from './components/pix-button/pix-button.module';
import { PixTagModule } from './components/pix-tag/pix-tag.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PixButtonModule, PixTagModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
