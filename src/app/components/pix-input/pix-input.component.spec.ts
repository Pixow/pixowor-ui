import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixInputComponent } from './pix-input.component';

describe('PixInputComponent', () => {
  let component: PixInputComponent;
  let fixture: ComponentFixture<PixInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
