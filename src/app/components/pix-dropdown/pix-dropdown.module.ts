import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PixDropdownComponent } from './pix-dropdown.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [PixDropdownComponent],
    imports: [CommonModule, FormsModule],
    exports: [PixDropdownComponent],
})
export class PixDropdownModule { }
