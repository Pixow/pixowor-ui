import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixListboxComponent } from './pix-listbox.component';

describe('PixListboxComponent', () => {
  let component: PixListboxComponent;
  let fixture: ComponentFixture<PixListboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixListboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
