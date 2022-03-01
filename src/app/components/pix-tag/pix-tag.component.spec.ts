import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixTagComponent } from './pix-tag.component';

describe('PixTagComponent', () => {
    let component: PixTagComponent;
    let fixture: ComponentFixture<PixTagComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PixTagComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PixTagComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
