import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PixFormComponent } from './pix-form.component';
import { FormsModule } from '@angular/forms';
import { PixInputModule } from '../pix-input/pix-input.module';


@NgModule({
    declarations: [PixFormComponent],
    imports: [CommonModule, FormsModule, PixInputModule],
    exports: [PixFormComponent],
})
export class PixFormModule { }
