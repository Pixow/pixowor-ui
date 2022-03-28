import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixEditPictureComponent } from './pix-edit-picture.component';

describe('PixEditPictureComponent', () => {
  let component: PixEditPictureComponent;
  let fixture: ComponentFixture<PixEditPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixEditPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixEditPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
