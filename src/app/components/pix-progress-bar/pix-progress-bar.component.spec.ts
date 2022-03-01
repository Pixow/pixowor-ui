import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixProgressBarComponent } from './pix-progress-bar.component';

describe('PixProgressBarComponent', () => {
  let component: PixProgressBarComponent;
  let fixture: ComponentFixture<PixProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
