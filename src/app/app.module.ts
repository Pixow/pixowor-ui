import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* module */
import { PixButtonModule } from './components/pix-button/pix-button.module';
import { PixTagModule } from './components/pix-tag/pix-tag.module';
import { PixInputModule } from './components/pix-input/pix-input.module';
import { PixDropdownModule } from './components/pix-dropdown/pix-dropdown.module';
import { PixListboxModule } from './components/pix-listbox/pix-listbox.module';
import { PixFormModule } from './components/pix-form/pix-form.module';
import { PixProgressBarModule } from './components/pix-progress-bar/pix-progress-bar.module';
import { PixPreviewModule } from './components/pix-preview/pix-preview.module';

/* service */
import { HttpService } from './services/http/http.service'
import { NodeService } from './services/node/node.service';




@NgModule({
    declarations: [AppComponent,],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        PixButtonModule,
        PixTagModule,
        PixInputModule,
        PixDropdownModule,
        PixListboxModule,
        PixFormModule,
        PixProgressBarModule,
        PixPreviewModule,


    ],
    providers: [HttpService, NodeService],
    bootstrap: [AppComponent],
})
export class AppModule { }
