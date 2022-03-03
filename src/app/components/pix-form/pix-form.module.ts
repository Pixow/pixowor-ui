import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PixFormComponent } from './pix-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [PixFormComponent],
    imports: [CommonModule, FormsModule],
    exports: [PixFormComponent],
})
export class PixFormModule { }
