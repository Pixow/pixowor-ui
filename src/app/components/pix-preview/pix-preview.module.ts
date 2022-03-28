import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PixPreviewComponent } from './pix-preview.component';
import { TreeModule } from 'primeng/tree';
import { ToastModule } from 'primeng/toast';
import { ContextMenuModule } from 'primeng/contextmenu';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';
@NgModule({
  declarations: [PixPreviewComponent],
  imports: [
    CommonModule,
    TreeModule,
    ToastModule,
    ContextMenuModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    ConfirmPopupModule,
  ],
  exports: [PixPreviewComponent],
  providers: [ConfirmationService],
})
export class PixPreviewModule {}
