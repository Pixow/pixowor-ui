import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
export interface addComponent {
    name: string
}
@Component({
    selector: 'app-pix-listbox',
    templateUrl: './pix-listbox.component.html',
    styleUrls: ['./pix-listbox.component.scss']
})
export class PixListboxComponent implements OnInit {
    public isshow: boolean = false;
    public zIndex: boolean = false;
    @Input() addData: MenuItem[] = []
    @Input() addTitle: string = ''
    @ViewChild('getDom') getDom: ElementRef
    @ViewChild('getHiddenDom') getHiddenDom: ElementRef
    @Output() onChange: EventEmitter<any> = new EventEmitter()
    constructor() { }

    ngOnInit(): void {
    }
    addModules(item: {}) {
        this.onChange.emit(item)
        this.hidden()
    }
    hidden() {
        this.zIndex = false
        this.isshow = false
    }
    addShow(e: Event) {
        const ONE_LI_HEIGHT = 32;
        const ALL_LI_HEIGHT = ONE_LI_HEIGHT * this.addData.length
        const DOM_TO_TOP = this.getDom.nativeElement.getBoundingClientRect().bottom
        const DOM_BOTTOM_TO_TOP = this.getDom.nativeElement.getBoundingClientRect().top
        let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        let isCan = windowHeight - DOM_TO_TOP < ALL_LI_HEIGHT
        if (isCan) {
            this.getHiddenDom.nativeElement.style.top = -DOM_BOTTOM_TO_TOP + 'px'
        }
        this.zIndex = true
        this.isshow = !this.isshow
    }
}
