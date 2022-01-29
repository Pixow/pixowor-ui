import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PixButtonModule } from './components/pix-button/pix-button.module';
import { PixTagModule } from './components/pix-tag/pix-tag.module';
import { PixInputModule } from './components/pix-input/pix-input.module';
import { PixDropdownModule } from './components/pix-dropdown/pix-dropdown.module';
import { PixListboxModule } from './components/pix-listbox/pix-listbox.module';
import { PixFormComponent } from './components/pix-form/pix-form.component';

@NgModule({
    declarations: [AppComponent, PixFormComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        PixButtonModule,
        PixTagModule,
        PixInputModule,
        PixDropdownModule,
        PixListboxModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
