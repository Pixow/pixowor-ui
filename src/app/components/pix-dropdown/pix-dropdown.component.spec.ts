import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixDropdownComponent } from './pix-dropdown.component';

describe('PixDropdownComponent', () => {
    let component: PixDropdownComponent;
    let fixture: ComponentFixture<PixDropdownComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PixDropdownComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PixDropdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
