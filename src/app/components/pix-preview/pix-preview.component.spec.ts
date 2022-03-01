import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixPreviewComponent } from './pix-preview.component';

describe('PixPreviewComponent', () => {
  let component: PixPreviewComponent;
  let fixture: ComponentFixture<PixPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
