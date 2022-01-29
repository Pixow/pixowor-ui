import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pix-tag',
    templateUrl: './pix-tag.component.html',
    styleUrls: ['./pix-tag.component.scss']
})
export class PixTagComponent implements OnInit {
    @Input() tooltipTextOne: string;
    @Input() tooltipTextTwo: string;
    public left: boolean = false;
    public right: boolean = false;
    public isShow: boolean = false;
    public zIndex: boolean = false;
    constructor() { }

    ngOnInit(): void {
    }
    coordinate(e) {
        this.zIndex = true
        this.left = false
        this.right = false
        let clint = e.clientX - 510;
        // console.log(clint)
        if (clint > 0) {
            this.right = true
        } else {
            this.left = true
        }
        this.isShow = true
    }
    hidden() {
        this.zIndex = false
        this.isShow = false
    }


}
