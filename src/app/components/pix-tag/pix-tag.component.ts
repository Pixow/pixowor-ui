import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-pix-tag',
    templateUrl: './pix-tag.component.html',
    styleUrls: ['./pix-tag.component.scss']
})
export class PixTagComponent implements OnInit {
    @Input() childState: string = '';
    @Input() childUse: string = '';
    @Input() tag: string;
    @Input() title: string = 'inspector';
    @ViewChild('getDom') getDom: ElementRef
    @ViewChild('getHiddenDom') getHiddenDom: ElementRef
    public hintButton = true
    public left: boolean = false;
    public right: boolean = false;
    public isRhombusRight: boolean = false;
    public isRhombusLeft: boolean = false;
    public isShow: boolean = false;
    public zIndex: boolean = false;
    constructor() { }
    ngOnInit(): void {
    }
    coordinate(e) {
        console.log(e)
        this.zIndex = true
        this.left = false
        this.right = false
        const HINT_BOX_WIDTH = 510;
        const HINT_BOX_HEIGHT = 272;
        const DOM_BOTTOM_TO_TOP = this.getDom.nativeElement.getBoundingClientRect().bottom
        let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        let clint = e.clientX - HINT_BOX_WIDTH;
        let upAndDown = windowHeight - DOM_BOTTOM_TO_TOP
        if (clint > 0 && upAndDown >= HINT_BOX_HEIGHT) {
            this.right = true
        } else if (clint < 0 && upAndDown > HINT_BOX_HEIGHT) {
            this.left = true
        } else if (clint > 0 && upAndDown < HINT_BOX_HEIGHT) {
            this.isRhombusRight = true
            this.getHiddenDom.nativeElement.style.bottom = -upAndDown + 'px'
            this.getHiddenDom.nativeElement.style.right = 50 + 'px'
        } else if (clint < 0 && upAndDown < HINT_BOX_HEIGHT) {
            this.isRhombusLeft = true
            this.getHiddenDom.nativeElement.style.bottom = -upAndDown + 'px'
            this.getHiddenDom.nativeElement.style.left = 50 + 'px'
        }
        this.isShow = true
    }
    hidden() {
        this.zIndex = false
        this.isShow = false
        this.hintButton = false
    }

}
