import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PixInputComponent } from './pix-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [PixInputComponent],
    imports: [CommonModule, FormsModule],
    exports: [PixInputComponent],
})
export class PixInputModule { }
