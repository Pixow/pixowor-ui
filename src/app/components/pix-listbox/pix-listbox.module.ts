import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PixListboxComponent } from './pix-listbox.component';

@NgModule({
    declarations: [PixListboxComponent],
    imports: [CommonModule],
    exports: [PixListboxComponent],
})
export class PixListboxModule { }
